import { zodResolver } from '@hookform/resolvers/zod';
import { createConnectQueryKey, useMutation } from '@connectrpc/connect-query';
import { useQueryClient } from '@tanstack/react-query';
import { Form, Input, Modal, Tabs } from 'antd';
import type { JSONSchema4 } from 'json-schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import yaml from 'yaml';
import { z } from 'zod';

import { YamlEditor } from '@ui/features/common/code-editor/yaml-editor';
import { FieldContainer } from '@ui/features/common/form/field-container';
import { ModalComponentProps } from '@ui/features/common/modal/modal-context';
import schema from '@ui/gen/schema/projects.kargo.akuity.io_v1alpha1.json';
import {
  createResource,
  listProjects
} from '@ui/gen/service/v1alpha1/service-KargoService_connectquery';
import { zodValidators } from '@ui/utils/validators';

import { projectYAMLExample } from './utils/project-yaml-example';

const formSchema = z.object({
  value: zodValidators.requiredString
});

export const CreateProjectModal = ({ visible, hide }: ModalComponentProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation(createResource, {
    onSuccess: () => hide()
  });

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      value: yaml.stringify(projectYAMLExample)
    },
    resolver: zodResolver(formSchema)
  });

  const onSubmit = handleSubmit(async (data) => {
    const textEncoder = new TextEncoder();
    await mutateAsync(
      {
        manifest: textEncoder.encode(data.value)
      },
      {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: createConnectQueryKey(listProjects) })
      }
    );
  });

  const yamlValue = watch('value');

  const name = React.useMemo(() => {
    try {
      return yaml.parse(yamlValue).metadata.name;
    } catch (err) {
      return '';
    }
  }, [yamlValue]);

  const setName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const data = {
      ...projectYAMLExample,
      metadata: {
        name: e.target.value
      }
    };

    setValue('value', yaml.stringify(data));
  };

  return (
    <Modal
      open={visible}
      title='Create Project'
      width={640}
      onCancel={hide}
      okText='Create'
      onOk={onSubmit}
      okButtonProps={{ loading: isPending }}
    >
      <Tabs
        items={[
          {
            key: '1',
            label: 'Form',
            children: (
              <>
                <Form layout='vertical' component='div'>
                  <Form.Item label='Project name'>
                    <Input
                      className='max-w-sm'
                      value={name}
                      onChange={setName}
                      placeholder='kargo-demo'
                    />
                  </Form.Item>
                </Form>
              </>
            )
          },
          {
            key: '2',
            label: 'YAML',
            children: (
              <FieldContainer name='value' control={control}>
                {({ field: { value, onChange } }) => (
                  <YamlEditor
                    value={value}
                    onChange={(e) => onChange(e || '')}
                    height='500px'
                    schema={schema as JSONSchema4}
                    placeholder={yaml.stringify(projectYAMLExample)}
                  />
                )}
              </FieldContainer>
            )
          }
        ]}
      />
    </Modal>
  );
};
