// @generated by protoc-gen-connect-query v0.4.1 with parameter "target=ts"
// @generated from file service/v1alpha1/service.proto (package akuity.io.kargo.service.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { AdminLoginRequest, AdminLoginResponse, CreateProjectRequest, CreateProjectResponse, CreatePromotionPolicyRequest, CreatePromotionPolicyResponse, CreateResourceRequest, CreateResourceResponse, CreateStageRequest, CreateStageResponse, DeleteProjectRequest, DeleteProjectResponse, DeletePromotionPolicyRequest, DeletePromotionPolicyResponse, DeleteResourceRequest, DeleteResourceResponse, DeleteStageRequest, DeleteStageResponse, GetPromotionPolicyRequest, GetPromotionPolicyResponse, GetPromotionRequest, GetPromotionResponse, GetPublicConfigRequest, GetPublicConfigResponse, GetStageRequest, GetStageResponse, GetVersionInfoRequest, GetVersionInfoResponse, ListProjectsRequest, ListProjectsResponse, ListPromotionPoliciesRequest, ListPromotionPoliciesResponse, ListPromotionsRequest, ListPromotionsResponse, ListStagesRequest, ListStagesResponse, PromoteStageRequest, PromoteStageResponse, PromoteSubscribersRequest, PromoteSubscribersResponse, RefreshStageRequest, RefreshStageResponse, SetAutoPromotionForStageRequest, SetAutoPromotionForStageResponse, UpdatePromotionPolicyRequest, UpdatePromotionPolicyResponse, UpdateResourceRequest, UpdateResourceResponse, UpdateStageRequest, UpdateStageResponse } from "./service_pb.js";

export const typeName = "akuity.io.kargo.service.v1alpha1.KargoService";

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetVersionInfo
 */
export const getVersionInfo = createQueryService({
  service: {
    methods: {
      getVersionInfo: {
        name: "GetVersionInfo",
        kind: MethodKind.Unary,
        I: GetVersionInfoRequest,
        O: GetVersionInfoResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).getVersionInfo;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetPublicConfig
 */
export const getPublicConfig = createQueryService({
  service: {
    methods: {
      getPublicConfig: {
        name: "GetPublicConfig",
        kind: MethodKind.Unary,
        I: GetPublicConfigRequest,
        O: GetPublicConfigResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).getPublicConfig;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.AdminLogin
 */
export const adminLogin = createQueryService({
  service: {
    methods: {
      adminLogin: {
        name: "AdminLogin",
        kind: MethodKind.Unary,
        I: AdminLoginRequest,
        O: AdminLoginResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).adminLogin;

/**
 * TODO(devholic): Add ApplyResource API
 * rpc ApplyResource(ApplyResourceRequest) returns (ApplyResourceRequest);
 *
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateResource
 */
export const createResource = createQueryService({
  service: {
    methods: {
      createResource: {
        name: "CreateResource",
        kind: MethodKind.Unary,
        I: CreateResourceRequest,
        O: CreateResourceResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).createResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateResource
 */
export const updateResource = createQueryService({
  service: {
    methods: {
      updateResource: {
        name: "UpdateResource",
        kind: MethodKind.Unary,
        I: UpdateResourceRequest,
        O: UpdateResourceResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).updateResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteResource
 */
export const deleteResource = createQueryService({
  service: {
    methods: {
      deleteResource: {
        name: "DeleteResource",
        kind: MethodKind.Unary,
        I: DeleteResourceRequest,
        O: DeleteResourceResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).deleteResource;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateStage
 */
export const createStage = createQueryService({
  service: {
    methods: {
      createStage: {
        name: "CreateStage",
        kind: MethodKind.Unary,
        I: CreateStageRequest,
        O: CreateStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).createStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListStages
 */
export const listStages = createQueryService({
  service: {
    methods: {
      listStages: {
        name: "ListStages",
        kind: MethodKind.Unary,
        I: ListStagesRequest,
        O: ListStagesResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).listStages;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetStage
 */
export const getStage = createQueryService({
  service: {
    methods: {
      getStage: {
        name: "GetStage",
        kind: MethodKind.Unary,
        I: GetStageRequest,
        O: GetStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).getStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdateStage
 */
export const updateStage = createQueryService({
  service: {
    methods: {
      updateStage: {
        name: "UpdateStage",
        kind: MethodKind.Unary,
        I: UpdateStageRequest,
        O: UpdateStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).updateStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteStage
 */
export const deleteStage = createQueryService({
  service: {
    methods: {
      deleteStage: {
        name: "DeleteStage",
        kind: MethodKind.Unary,
        I: DeleteStageRequest,
        O: DeleteStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).deleteStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.PromoteStage
 */
export const promoteStage = createQueryService({
  service: {
    methods: {
      promoteStage: {
        name: "PromoteStage",
        kind: MethodKind.Unary,
        I: PromoteStageRequest,
        O: PromoteStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).promoteStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.PromoteSubscribers
 */
export const promoteSubscribers = createQueryService({
  service: {
    methods: {
      promoteSubscribers: {
        name: "PromoteSubscribers",
        kind: MethodKind.Unary,
        I: PromoteSubscribersRequest,
        O: PromoteSubscribersResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).promoteSubscribers;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.RefreshStage
 */
export const refreshStage = createQueryService({
  service: {
    methods: {
      refreshStage: {
        name: "RefreshStage",
        kind: MethodKind.Unary,
        I: RefreshStageRequest,
        O: RefreshStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).refreshStage;

/**
 * Promotion APIs 
 *
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListPromotions
 */
export const listPromotions = createQueryService({
  service: {
    methods: {
      listPromotions: {
        name: "ListPromotions",
        kind: MethodKind.Unary,
        I: ListPromotionsRequest,
        O: ListPromotionsResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).listPromotions;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetPromotion
 */
export const getPromotion = createQueryService({
  service: {
    methods: {
      getPromotion: {
        name: "GetPromotion",
        kind: MethodKind.Unary,
        I: GetPromotionRequest,
        O: GetPromotionResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).getPromotion;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.SetAutoPromotionForStage
 */
export const setAutoPromotionForStage = createQueryService({
  service: {
    methods: {
      setAutoPromotionForStage: {
        name: "SetAutoPromotionForStage",
        kind: MethodKind.Unary,
        I: SetAutoPromotionForStageRequest,
        O: SetAutoPromotionForStageResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).setAutoPromotionForStage;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreatePromotionPolicy
 */
export const createPromotionPolicy = createQueryService({
  service: {
    methods: {
      createPromotionPolicy: {
        name: "CreatePromotionPolicy",
        kind: MethodKind.Unary,
        I: CreatePromotionPolicyRequest,
        O: CreatePromotionPolicyResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).createPromotionPolicy;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListPromotionPolicies
 */
export const listPromotionPolicies = createQueryService({
  service: {
    methods: {
      listPromotionPolicies: {
        name: "ListPromotionPolicies",
        kind: MethodKind.Unary,
        I: ListPromotionPoliciesRequest,
        O: ListPromotionPoliciesResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).listPromotionPolicies;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetPromotionPolicy
 */
export const getPromotionPolicy = createQueryService({
  service: {
    methods: {
      getPromotionPolicy: {
        name: "GetPromotionPolicy",
        kind: MethodKind.Unary,
        I: GetPromotionPolicyRequest,
        O: GetPromotionPolicyResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).getPromotionPolicy;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.UpdatePromotionPolicy
 */
export const updatePromotionPolicy = createQueryService({
  service: {
    methods: {
      updatePromotionPolicy: {
        name: "UpdatePromotionPolicy",
        kind: MethodKind.Unary,
        I: UpdatePromotionPolicyRequest,
        O: UpdatePromotionPolicyResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).updatePromotionPolicy;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeletePromotionPolicy
 */
export const deletePromotionPolicy = createQueryService({
  service: {
    methods: {
      deletePromotionPolicy: {
        name: "DeletePromotionPolicy",
        kind: MethodKind.Unary,
        I: DeletePromotionPolicyRequest,
        O: DeletePromotionPolicyResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).deletePromotionPolicy;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.CreateProject
 */
export const createProject = createQueryService({
  service: {
    methods: {
      createProject: {
        name: "CreateProject",
        kind: MethodKind.Unary,
        I: CreateProjectRequest,
        O: CreateProjectResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).createProject;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListProjects
 */
export const listProjects = createQueryService({
  service: {
    methods: {
      listProjects: {
        name: "ListProjects",
        kind: MethodKind.Unary,
        I: ListProjectsRequest,
        O: ListProjectsResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).listProjects;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.DeleteProject
 */
export const deleteProject = createQueryService({
  service: {
    methods: {
      deleteProject: {
        name: "DeleteProject",
        kind: MethodKind.Unary,
        I: DeleteProjectRequest,
        O: DeleteProjectResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).deleteProject;
