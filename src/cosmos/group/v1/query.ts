//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupPolicyInfo, GroupPolicyInfoAmino, GroupMember, GroupMemberAmino, Proposal, ProposalAmino, Vote, VoteAmino, TallyResult, TallyResultAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface QueryGroupInfoRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest";
  value: Uint8Array;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface QueryGroupInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupInfoRequest";
  value: QueryGroupInfoRequestAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo of the group. */
  info?: GroupInfo;
}
export interface QueryGroupInfoResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse";
  value: Uint8Array;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
  /** info is the GroupInfo of the group. */
  info?: GroupInfoAmino;
}
export interface QueryGroupInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupInfoResponse";
  value: QueryGroupInfoResponseAmino;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
  /** address is the account address of the group policy. */
  address: string;
}
export interface QueryGroupPolicyInfoRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest";
  value: Uint8Array;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestAmino {
  /** address is the account address of the group policy. */
  address?: string;
}
export interface QueryGroupPolicyInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPolicyInfoRequest";
  value: QueryGroupPolicyInfoRequestAmino;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
  /** info is the GroupPolicyInfo of the group policy. */
  info?: GroupPolicyInfo;
}
export interface QueryGroupPolicyInfoResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse";
  value: Uint8Array;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseAmino {
  /** info is the GroupPolicyInfo of the group policy. */
  info?: GroupPolicyInfoAmino;
}
export interface QueryGroupPolicyInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPolicyInfoResponse";
  value: QueryGroupPolicyInfoResponseAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupMembersRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest";
  value: Uint8Array;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupMembersRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupMembersRequest";
  value: QueryGroupMembersRequestAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupMembersResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse";
  value: Uint8Array;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
  /** members are the members of the group with given group_id. */
  members?: GroupMemberAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupMembersResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupMembersResponse";
  value: QueryGroupMembersResponseAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByAdminRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestAmino {
  /** admin is the account address of a group's admin. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByAdminRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsByAdminRequest";
  value: QueryGroupsByAdminRequestAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
  /** groups are the groups info with the provided admin. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByAdminResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsByAdminResponse";
  value: QueryGroupsByAdminResponseAmino;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
  /** group_id is the unique ID of the group policy's group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupPoliciesByGroupRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
  value: Uint8Array;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestAmino {
  /** group_id is the unique ID of the group policy's group. */
  group_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByGroupRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest";
  value: QueryGroupPoliciesByGroupRequestAmino;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
  /** group_policies are the group policies info associated with the provided group. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupPoliciesByGroupResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
  value: Uint8Array;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseAmino {
  /** group_policies are the group policies info associated with the provided group. */
  group_policies?: GroupPolicyInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByGroupResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse";
  value: QueryGroupPoliciesByGroupResponseAmino;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupPoliciesByAdminRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestAmino {
  /** admin is the admin address of the group policy. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByAdminRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest";
  value: QueryGroupPoliciesByAdminRequestAmino;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
  /** group_policies are the group policies info with provided admin. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupPoliciesByAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseAmino {
  /** group_policies are the group policies info with provided admin. */
  group_policies?: GroupPolicyInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByAdminResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse";
  value: QueryGroupPoliciesByAdminResponseAmino;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
  /** proposal is the proposal info. */
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProposalsByGroupPolicyRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
  value: Uint8Array;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestAmino {
  /** address is the account address of the group policy related to proposals. */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsByGroupPolicyRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest";
  value: QueryProposalsByGroupPolicyRequestAmino;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProposalsByGroupPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
  value: Uint8Array;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseAmino {
  /** proposals are the proposals with given group policy. */
  proposals?: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsByGroupPolicyResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse";
  value: QueryProposalsByGroupPolicyResponseAmino;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** voter is a proposal voter account address. */
  voter: string;
}
export interface QueryVoteByProposalVoterRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest";
  value: Uint8Array;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
  /** voter is a proposal voter account address. */
  voter?: string;
}
export interface QueryVoteByProposalVoterRequestAminoMsg {
  type: "cosmos-sdk/QueryVoteByProposalVoterRequest";
  value: QueryVoteByProposalVoterRequestAmino;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}
export interface QueryVoteByProposalVoterResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse";
  value: Uint8Array;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseAmino {
  /** vote is the vote with given proposal_id and voter. */
  vote?: VoteAmino;
}
export interface QueryVoteByProposalVoterResponseAminoMsg {
  type: "cosmos-sdk/QueryVoteByProposalVoterResponse";
  value: QueryVoteByProposalVoterResponseAmino;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByProposalRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest";
  value: Uint8Array;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesByProposalRequest";
  value: QueryVotesByProposalRequestAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse";
  value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
  /** votes are the list of votes for given proposal_id. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesByProposalResponse";
  value: QueryVotesByProposalResponseAmino;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest";
  value: Uint8Array;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
  /** voter is a proposal voter account address. */
  voter?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesByVoterRequest";
  value: QueryVotesByVoterRequestAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse";
  value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
  /** votes are the list of votes by given voter. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesByVoterResponse";
  value: QueryVotesByVoterResponseAmino;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByMemberRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest";
  value: Uint8Array;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestAmino {
  /** address is the group member address. */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByMemberRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsByMemberRequest";
  value: QueryGroupsByMemberRequestAmino;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByMemberResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse";
  value: Uint8Array;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseAmino {
  /** groups are the groups info with the provided group member. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByMemberResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsByMemberResponse";
  value: QueryGroupsByMemberResponseAmino;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
  /** proposal_id is the unique id of a proposal. */
  proposalId: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest";
  value: Uint8Array;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestAmino {
  /** proposal_id is the unique id of a proposal. */
  proposal_id?: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "cosmos-sdk/QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse";
  value: Uint8Array;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseAmino {
  /** tally defines the requested tally. */
  tally: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "cosmos-sdk/QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsRequest";
  value: Uint8Array;
}
/**
 * QueryGroupsRequest is the Query/Groups request type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsRequest";
  value: QueryGroupsRequestAmino;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsResponse {
  /** `groups` is all the groups present in state. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsResponse";
  value: Uint8Array;
}
/**
 * QueryGroupsResponse is the Query/Groups response type.
 * 
 * Since: cosmos-sdk 0.47.1
 */
export interface QueryGroupsResponseAmino {
  /** `groups` is all the groups present in state. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsResponse";
  value: QueryGroupsResponseAmino;
}
function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    groupId: BigInt(0)
  };
}
export const QueryGroupInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
  encode(message: QueryGroupInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupInfoRequest>, I>>(object: I): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: QueryGroupInfoRequest): QueryGroupInfoRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoRequestAminoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupInfoRequestProtoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.decode(message.value);
  },
  toProto(message: QueryGroupInfoRequest): Uint8Array {
    return QueryGroupInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupInfoResponse(): QueryGroupInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
  encode(message: QueryGroupInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupInfoResponse>, I>>(object: I): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromPartial(object.info);
    }
    return message;
  },
  fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGroupInfoResponse): QueryGroupInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoResponseAminoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupInfoResponseProtoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.decode(message.value);
  },
  toProto(message: QueryGroupInfoResponse): Uint8Array {
    return QueryGroupInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPolicyInfoRequest(): QueryGroupPolicyInfoRequest {
  return {
    address: ""
  };
}
export const QueryGroupPolicyInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
  encode(message: QueryGroupPolicyInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPolicyInfoRequest>, I>>(object: I): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGroupPolicyInfoRequestAmino): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPolicyInfoRequestAminoMsg): QueryGroupPolicyInfoRequest {
    return QueryGroupPolicyInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPolicyInfoRequestProtoMsg): QueryGroupPolicyInfoRequest {
    return QueryGroupPolicyInfoRequest.decode(message.value);
  },
  toProto(message: QueryGroupPolicyInfoRequest): Uint8Array {
    return QueryGroupPolicyInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPolicyInfoResponse(): QueryGroupPolicyInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupPolicyInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
  encode(message: QueryGroupPolicyInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupPolicyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPolicyInfoResponse>, I>>(object: I): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupPolicyInfo.fromPartial(object.info);
    }
    return message;
  },
  fromAmino(object: QueryGroupPolicyInfoResponseAmino): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupPolicyInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupPolicyInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPolicyInfoResponseAminoMsg): QueryGroupPolicyInfoResponse {
    return QueryGroupPolicyInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPolicyInfoResponseProtoMsg): QueryGroupPolicyInfoResponse {
    return QueryGroupPolicyInfoResponse.decode(message.value);
  },
  toProto(message: QueryGroupPolicyInfoResponse): Uint8Array {
    return QueryGroupPolicyInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined
  };
}
export const QueryGroupMembersRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
  encode(message: QueryGroupMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupMembersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersRequest>, I>>(object: I): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupMembersRequest): QueryGroupMembersRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersRequestAminoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupMembersRequestProtoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.decode(message.value);
  },
  toProto(message: QueryGroupMembersRequest): Uint8Array {
    return QueryGroupMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersResponse(): QueryGroupMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}
export const QueryGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
  encode(message: QueryGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersResponse>, I>>(object: I): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupMembersResponse): QueryGroupMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersResponseAminoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupMembersResponseProtoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.decode(message.value);
  },
  toProto(message: QueryGroupMembersResponse): Uint8Array {
    return QueryGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminRequest(): QueryGroupsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupsByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
  encode(message: QueryGroupsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByAdminRequest>, I>>(object: I): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminRequestAminoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByAdminRequestProtoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.decode(message.value);
  },
  toProto(message: QueryGroupsByAdminRequest): Uint8Array {
    return QueryGroupsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminResponse(): QueryGroupsByAdminResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
  encode(message: QueryGroupsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByAdminResponse>, I>>(object: I): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminResponseAminoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByAdminResponseProtoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.decode(message.value);
  },
  toProto(message: QueryGroupsByAdminResponse): Uint8Array {
    return QueryGroupsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByGroupRequest(): QueryGroupPoliciesByGroupRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined
  };
}
export const QueryGroupPoliciesByGroupRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
  encode(message: QueryGroupPoliciesByGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByGroupRequest>, I>>(object: I): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByGroupRequestAmino): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByGroupRequestAminoMsg): QueryGroupPoliciesByGroupRequest {
    return QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByGroupRequestProtoMsg): QueryGroupPoliciesByGroupRequest {
    return QueryGroupPoliciesByGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByGroupRequest): Uint8Array {
    return QueryGroupPoliciesByGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByGroupResponse(): QueryGroupPoliciesByGroupResponse {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
export const QueryGroupPoliciesByGroupResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
  encode(message: QueryGroupPoliciesByGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByGroupResponse>, I>>(object: I): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByGroupResponseAmino): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAmino {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByGroupResponseAminoMsg): QueryGroupPoliciesByGroupResponse {
    return QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByGroupResponseProtoMsg): QueryGroupPoliciesByGroupResponse {
    return QueryGroupPoliciesByGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByGroupResponse): Uint8Array {
    return QueryGroupPoliciesByGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByAdminRequest(): QueryGroupPoliciesByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupPoliciesByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
  encode(message: QueryGroupPoliciesByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByAdminRequest>, I>>(object: I): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = object.admin ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByAdminRequestAmino): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByAdminRequestAminoMsg): QueryGroupPoliciesByAdminRequest {
    return QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByAdminRequestProtoMsg): QueryGroupPoliciesByAdminRequest {
    return QueryGroupPoliciesByAdminRequest.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByAdminRequest): Uint8Array {
    return QueryGroupPoliciesByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByAdminResponse(): QueryGroupPoliciesByAdminResponse {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
export const QueryGroupPoliciesByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
  encode(message: QueryGroupPoliciesByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupPoliciesByAdminResponse>, I>>(object: I): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupPoliciesByAdminResponseAmino): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAmino {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByAdminResponseAminoMsg): QueryGroupPoliciesByAdminResponse {
    return QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByAdminResponseProtoMsg): QueryGroupPoliciesByAdminResponse {
    return QueryGroupPoliciesByAdminResponse.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByAdminResponse): Uint8Array {
    return QueryGroupPoliciesByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest",
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(object: I): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(object: I): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    }
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupPolicyRequest(): QueryProposalsByGroupPolicyRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryProposalsByGroupPolicyRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
  encode(message: QueryProposalsByGroupPolicyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalsByGroupPolicyRequest>, I>>(object: I): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryProposalsByGroupPolicyRequestAmino): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupPolicyRequestAminoMsg): QueryProposalsByGroupPolicyRequest {
    return QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsByGroupPolicyRequestProtoMsg): QueryProposalsByGroupPolicyRequest {
    return QueryProposalsByGroupPolicyRequest.decode(message.value);
  },
  toProto(message: QueryProposalsByGroupPolicyRequest): Uint8Array {
    return QueryProposalsByGroupPolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupPolicyResponse(): QueryProposalsByGroupPolicyResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsByGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
  encode(message: QueryProposalsByGroupPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalsByGroupPolicyResponse>, I>>(object: I): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryProposalsByGroupPolicyResponseAmino): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupPolicyResponseAminoMsg): QueryProposalsByGroupPolicyResponse {
    return QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsByGroupPolicyResponseProtoMsg): QueryProposalsByGroupPolicyResponse {
    return QueryProposalsByGroupPolicyResponse.decode(message.value);
  },
  toProto(message: QueryProposalsByGroupPolicyResponse): Uint8Array {
    return QueryProposalsByGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteByProposalVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
  encode(message: QueryVoteByProposalVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVoteByProposalVoterRequest>, I>>(object: I): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterRequestAminoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteByProposalVoterRequestProtoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.decode(message.value);
  },
  toProto(message: QueryVoteByProposalVoterRequest): Uint8Array {
    return QueryVoteByProposalVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterResponse(): QueryVoteByProposalVoterResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteByProposalVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
  encode(message: QueryVoteByProposalVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVoteByProposalVoterResponse>, I>>(object: I): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    }
    return message;
  },
  fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterResponseAminoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteByProposalVoterResponseProtoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.decode(message.value);
  },
  toProto(message: QueryVoteByProposalVoterResponse): Uint8Array {
    return QueryVoteByProposalVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalRequest(): QueryVotesByProposalRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesByProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
  encode(message: QueryVotesByProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByProposalRequest>, I>>(object: I): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalRequestAminoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByProposalRequestProtoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.decode(message.value);
  },
  toProto(message: QueryVotesByProposalRequest): Uint8Array {
    return QueryVotesByProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalResponse(): QueryVotesByProposalResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
  encode(message: QueryVotesByProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByProposalResponse>, I>>(object: I): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalResponseAminoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByProposalResponseProtoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.decode(message.value);
  },
  toProto(message: QueryVotesByProposalResponse): Uint8Array {
    return QueryVotesByProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    voter: "",
    pagination: undefined
  };
}
export const QueryVotesByVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
  encode(message: QueryVotesByVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByVoterRequest>, I>>(object: I): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.decode(message.value);
  },
  toProto(message: QueryVotesByVoterRequest): Uint8Array {
    return QueryVotesByVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
  encode(message: QueryVotesByVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVotesByVoterResponse>, I>>(object: I): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.decode(message.value);
  },
  toProto(message: QueryVotesByVoterResponse): Uint8Array {
    return QueryVotesByVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByMemberRequest(): QueryGroupsByMemberRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryGroupsByMemberRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
  encode(message: QueryGroupsByMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByMemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByMemberRequest>, I>>(object: I): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupsByMemberRequestAmino): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByMemberRequestAminoMsg): QueryGroupsByMemberRequest {
    return QueryGroupsByMemberRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByMemberRequestProtoMsg): QueryGroupsByMemberRequest {
    return QueryGroupsByMemberRequest.decode(message.value);
  },
  toProto(message: QueryGroupsByMemberRequest): Uint8Array {
    return QueryGroupsByMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByMemberResponse(): QueryGroupsByMemberResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByMemberResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
  encode(message: QueryGroupsByMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsByMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsByMemberResponse>, I>>(object: I): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupsByMemberResponseAmino): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByMemberResponseAminoMsg): QueryGroupsByMemberResponse {
    return QueryGroupsByMemberResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByMemberResponseProtoMsg): QueryGroupsByMemberResponse {
    return QueryGroupsByMemberResponse.decode(message.value);
  },
  toProto(message: QueryGroupsByMemberResponse): Uint8Array {
    return QueryGroupsByMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTallyResultRequest>, I>>(object: I): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: TallyResult.fromPartial({})
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTallyResultResponse>, I>>(object: I): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromPartial(object.tally);
    }
    return message;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : TallyResult.toAmino(TallyResult.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsRequest(): QueryGroupsRequest {
  return {
    pagination: undefined
  };
}
export const QueryGroupsRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
  encode(message: QueryGroupsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsRequest>, I>>(object: I): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupsRequestAmino): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsRequest): QueryGroupsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsRequestAminoMsg): QueryGroupsRequest {
    return QueryGroupsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsRequest): QueryGroupsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsRequest",
      value: QueryGroupsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsRequestProtoMsg): QueryGroupsRequest {
    return QueryGroupsRequest.decode(message.value);
  },
  toProto(message: QueryGroupsRequest): Uint8Array {
    return QueryGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsRequest): QueryGroupsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
      value: QueryGroupsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsResponse(): QueryGroupsResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
  encode(message: QueryGroupsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupsResponse>, I>>(object: I): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGroupsResponseAmino): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsResponse): QueryGroupsResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsResponseAminoMsg): QueryGroupsResponse {
    return QueryGroupsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsResponse): QueryGroupsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsResponse",
      value: QueryGroupsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsResponseProtoMsg): QueryGroupsResponse {
    return QueryGroupsResponse.decode(message.value);
  },
  toProto(message: QueryGroupsResponse): Uint8Array {
    return QueryGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsResponse): QueryGroupsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
      value: QueryGroupsResponse.encode(message).finish()
    };
  }
};
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  GroupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
  /** GroupMembers queries members of a group by group id. */
  GroupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  GroupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
  /** GroupPoliciesByGroup queries group policies by group id. */
  GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
  /** GroupPoliciesByAdmin queries group policies by admin address. */
  GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  VoteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal id. */
  VotesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  VotesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
  /** GroupsByMember queries groups by member address. */
  GroupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
  /**
   * Groups queries all groups in state.
   * 
   * Since: cosmos-sdk 0.47.1
   */
  Groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GroupInfo = this.GroupInfo.bind(this);
    this.GroupPolicyInfo = this.GroupPolicyInfo.bind(this);
    this.GroupMembers = this.GroupMembers.bind(this);
    this.GroupsByAdmin = this.GroupsByAdmin.bind(this);
    this.GroupPoliciesByGroup = this.GroupPoliciesByGroup.bind(this);
    this.GroupPoliciesByAdmin = this.GroupPoliciesByAdmin.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.ProposalsByGroupPolicy = this.ProposalsByGroupPolicy.bind(this);
    this.VoteByProposalVoter = this.VoteByProposalVoter.bind(this);
    this.VotesByProposal = this.VotesByProposal.bind(this);
    this.VotesByVoter = this.VotesByVoter.bind(this);
    this.GroupsByMember = this.GroupsByMember.bind(this);
    this.TallyResult = this.TallyResult.bind(this);
    this.Groups = this.Groups.bind(this);
  }
  GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then(data => QueryGroupInfoResponse.decode(new BinaryReader(data)));
  }
  GroupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then(data => QueryGroupPolicyInfoResponse.decode(new BinaryReader(data)));
  }
  GroupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then(data => QueryGroupMembersResponse.decode(new BinaryReader(data)));
  }
  GroupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then(data => QueryGroupsByAdminResponse.decode(new BinaryReader(data)));
  }
  GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then(data => QueryGroupPoliciesByGroupResponse.decode(new BinaryReader(data)));
  }
  GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then(data => QueryGroupPoliciesByAdminResponse.decode(new BinaryReader(data)));
  }
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  }
  ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then(data => QueryProposalsByGroupPolicyResponse.decode(new BinaryReader(data)));
  }
  VoteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then(data => QueryVoteByProposalVoterResponse.decode(new BinaryReader(data)));
  }
  VotesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then(data => QueryVotesByProposalResponse.decode(new BinaryReader(data)));
  }
  VotesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new BinaryReader(data)));
  }
  GroupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then(data => QueryGroupsByMemberResponse.decode(new BinaryReader(data)));
  }
  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  }
  Groups(request: QueryGroupsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryGroupsResponse> {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then(data => QueryGroupsResponse.decode(new BinaryReader(data)));
  }
}