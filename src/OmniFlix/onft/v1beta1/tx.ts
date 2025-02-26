//@ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress, WeightedAddressAmino, Metadata, MetadataAmino } from "./onft";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "OmniFlix.onft.v1beta1";
export interface MsgCreateDenom {
  id: string;
  symbol: string;
  name: string;
  description: string;
  previewUri: string;
  schema: string;
  sender: string;
  creationFee: Coin;
  uri: string;
  uriHash: string;
  data: string;
  royaltyReceivers: WeightedAddress[];
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom";
  value: Uint8Array;
}
export interface MsgCreateDenomAmino {
  id?: string;
  symbol?: string;
  name?: string;
  description?: string;
  preview_uri?: string;
  schema?: string;
  sender?: string;
  creation_fee?: CoinAmino;
  uri?: string;
  uri_hash?: string;
  data?: string;
  royalty_receivers?: WeightedAddressAmino[];
}
export interface MsgCreateDenomAminoMsg {
  type: "OmniFlix/onft/MsgCreateDenom";
  value: MsgCreateDenomAmino;
}
export interface MsgCreateDenomResponse {}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse";
  value: Uint8Array;
}
export interface MsgCreateDenomResponseAmino {}
export interface MsgCreateDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse";
  value: MsgCreateDenomResponseAmino;
}
export interface MsgUpdateDenom {
  id: string;
  name: string;
  description: string;
  previewUri: string;
  sender: string;
  royaltyReceivers: WeightedAddress[];
}
export interface MsgUpdateDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom";
  value: Uint8Array;
}
export interface MsgUpdateDenomAmino {
  id?: string;
  name?: string;
  description?: string;
  preview_uri?: string;
  sender?: string;
  royalty_receivers?: WeightedAddressAmino[];
}
export interface MsgUpdateDenomAminoMsg {
  type: "OmniFlix/onft/MsgUpdateDenom";
  value: MsgUpdateDenomAmino;
}
export interface MsgUpdateDenomResponse {}
export interface MsgUpdateDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse";
  value: Uint8Array;
}
export interface MsgUpdateDenomResponseAmino {}
export interface MsgUpdateDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse";
  value: MsgUpdateDenomResponseAmino;
}
export interface MsgPurgeDenom {
  id: string;
  sender: string;
}
export interface MsgPurgeDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom";
  value: Uint8Array;
}
export interface MsgPurgeDenomAmino {
  id?: string;
  sender?: string;
}
export interface MsgPurgeDenomAminoMsg {
  type: "OmniFlix/onft/MsgPurgeDenom";
  value: MsgPurgeDenomAmino;
}
export interface MsgPurgeDenomResponse {}
export interface MsgPurgeDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse";
  value: Uint8Array;
}
export interface MsgPurgeDenomResponseAmino {}
export interface MsgPurgeDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse";
  value: MsgPurgeDenomResponseAmino;
}
export interface MsgTransferDenom {
  id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom";
  value: Uint8Array;
}
export interface MsgTransferDenomAmino {
  id?: string;
  sender?: string;
  recipient?: string;
}
export interface MsgTransferDenomAminoMsg {
  type: "OmniFlix/onft/MsgTransferDenom";
  value: MsgTransferDenomAmino;
}
export interface MsgTransferDenomResponse {}
export interface MsgTransferDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse";
  value: Uint8Array;
}
export interface MsgTransferDenomResponseAmino {}
export interface MsgTransferDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse";
  value: MsgTransferDenomResponseAmino;
}
export interface MsgMintONFT {
  id: string;
  denomId: string;
  metadata: Metadata;
  data: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  royaltyShare: string;
  sender: string;
  recipient: string;
}
export interface MsgMintONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT";
  value: Uint8Array;
}
export interface MsgMintONFTAmino {
  id?: string;
  denom_id?: string;
  metadata?: MetadataAmino;
  data?: string;
  transferable?: boolean;
  extensible?: boolean;
  nsfw?: boolean;
  royalty_share?: string;
  sender?: string;
  recipient?: string;
}
export interface MsgMintONFTAminoMsg {
  type: "OmniFlix/onft/MsgMintONFT";
  value: MsgMintONFTAmino;
}
export interface MsgMintONFTResponse {}
export interface MsgMintONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse";
  value: Uint8Array;
}
export interface MsgMintONFTResponseAmino {}
export interface MsgMintONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse";
  value: MsgMintONFTResponseAmino;
}
export interface MsgTransferONFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT";
  value: Uint8Array;
}
export interface MsgTransferONFTAmino {
  id?: string;
  denom_id?: string;
  sender?: string;
  recipient?: string;
}
export interface MsgTransferONFTAminoMsg {
  type: "OmniFlix/onft/MsgTransferONFT";
  value: MsgTransferONFTAmino;
}
export interface MsgTransferONFTResponse {}
export interface MsgTransferONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse";
  value: Uint8Array;
}
export interface MsgTransferONFTResponseAmino {}
export interface MsgTransferONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse";
  value: MsgTransferONFTResponseAmino;
}
export interface MsgBurnONFT {
  id: string;
  denomId: string;
  sender: string;
}
export interface MsgBurnONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT";
  value: Uint8Array;
}
export interface MsgBurnONFTAmino {
  id?: string;
  denom_id?: string;
  sender?: string;
}
export interface MsgBurnONFTAminoMsg {
  type: "OmniFlix/onft/MsgBurnONFT";
  value: MsgBurnONFTAmino;
}
export interface MsgBurnONFTResponse {}
export interface MsgBurnONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse";
  value: Uint8Array;
}
export interface MsgBurnONFTResponseAmino {}
export interface MsgBurnONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse";
  value: MsgBurnONFTResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the onft module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the onft module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    id: "",
    symbol: "",
    name: "",
    description: "",
    previewUri: "",
    schema: "",
    sender: "",
    creationFee: Coin.fromPartial({}),
    uri: "",
    uriHash: "",
    data: "",
    royaltyReceivers: []
  };
}
export const MsgCreateDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.schema !== "") {
      writer.uint32(50).string(message.schema);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(66).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(74).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(82).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(90).string(message.data);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        case 6:
          message.schema = reader.string();
          break;
        case 7:
          message.sender = reader.string();
          break;
        case 8:
          message.creationFee = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.uri = reader.string();
          break;
        case 10:
          message.uriHash = reader.string();
          break;
        case 11:
          message.data = reader.string();
          break;
        case 12:
          message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.id = object.id ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.schema = object.schema ?? "";
    message.sender = object.sender ?? "";
    if (object.creationFee !== undefined && object.creationFee !== null) {
      message.creationFee = Coin.fromPartial(object.creationFee);
    }
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.creation_fee !== undefined && object.creation_fee !== null) {
      message.creationFee = Coin.fromAmino(object.creation_fee);
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
    obj.schema = message.schema === "" ? undefined : message.schema;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.data = message.data === "" ? undefined : message.data;
    if (message.royaltyReceivers) {
      obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.royalty_receivers = message.royaltyReceivers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
    return MsgCreateDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg {
    return {
      type: "OmniFlix/onft/MsgCreateDenom",
      value: MsgCreateDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}
export const MsgCreateDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
  encode(_: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(_: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
  fromAmino(_: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
  toAmino(_: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenom(): MsgUpdateDenom {
  return {
    id: "",
    name: "",
    description: "",
    previewUri: "",
    sender: "",
    royaltyReceivers: []
  };
}
export const MsgUpdateDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
  encode(message: MsgUpdateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        case 6:
          message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(object: I): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.sender = object.sender ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateDenomAmino): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateDenom): MsgUpdateDenomAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.royaltyReceivers) {
      obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.royalty_receivers = message.royaltyReceivers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomAminoMsg): MsgUpdateDenom {
    return MsgUpdateDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateDenom): MsgUpdateDenomAminoMsg {
    return {
      type: "OmniFlix/onft/MsgUpdateDenom",
      value: MsgUpdateDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateDenomProtoMsg): MsgUpdateDenom {
    return MsgUpdateDenom.decode(message.value);
  },
  toProto(message: MsgUpdateDenom): Uint8Array {
    return MsgUpdateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenom): MsgUpdateDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
      value: MsgUpdateDenom.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
  return {};
}
export const MsgUpdateDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
  encode(_: MsgUpdateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(_: I): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDenomResponseAmino): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
  toAmino(_: MsgUpdateDenomResponse): MsgUpdateDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomResponseAminoMsg): MsgUpdateDenomResponse {
    return MsgUpdateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomResponseProtoMsg): MsgUpdateDenomResponse {
    return MsgUpdateDenomResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomResponse): Uint8Array {
    return MsgUpdateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomResponse): MsgUpdateDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
      value: MsgUpdateDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPurgeDenom(): MsgPurgeDenom {
  return {
    id: "",
    sender: ""
  };
}
export const MsgPurgeDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
  encode(message: MsgPurgeDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurgeDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurgeDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurgeDenom>, I>>(object: I): MsgPurgeDenom {
    const message = createBaseMsgPurgeDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgPurgeDenomAmino): MsgPurgeDenom {
    const message = createBaseMsgPurgeDenom();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgPurgeDenom): MsgPurgeDenomAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgPurgeDenomAminoMsg): MsgPurgeDenom {
    return MsgPurgeDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPurgeDenom): MsgPurgeDenomAminoMsg {
    return {
      type: "OmniFlix/onft/MsgPurgeDenom",
      value: MsgPurgeDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPurgeDenomProtoMsg): MsgPurgeDenom {
    return MsgPurgeDenom.decode(message.value);
  },
  toProto(message: MsgPurgeDenom): Uint8Array {
    return MsgPurgeDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgPurgeDenom): MsgPurgeDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
      value: MsgPurgeDenom.encode(message).finish()
    };
  }
};
function createBaseMsgPurgeDenomResponse(): MsgPurgeDenomResponse {
  return {};
}
export const MsgPurgeDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse",
  encode(_: MsgPurgeDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurgeDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurgeDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurgeDenomResponse>, I>>(_: I): MsgPurgeDenomResponse {
    const message = createBaseMsgPurgeDenomResponse();
    return message;
  },
  fromAmino(_: MsgPurgeDenomResponseAmino): MsgPurgeDenomResponse {
    const message = createBaseMsgPurgeDenomResponse();
    return message;
  },
  toAmino(_: MsgPurgeDenomResponse): MsgPurgeDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPurgeDenomResponseAminoMsg): MsgPurgeDenomResponse {
    return MsgPurgeDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurgeDenomResponseProtoMsg): MsgPurgeDenomResponse {
    return MsgPurgeDenomResponse.decode(message.value);
  },
  toProto(message: MsgPurgeDenomResponse): Uint8Array {
    return MsgPurgeDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPurgeDenomResponse): MsgPurgeDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse",
      value: MsgPurgeDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDenom(): MsgTransferDenom {
  return {
    id: "",
    sender: "",
    recipient: ""
  };
}
export const MsgTransferDenom = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
  encode(message: MsgTransferDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferDenom>, I>>(object: I): MsgTransferDenom {
    const message = createBaseMsgTransferDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgTransferDenomAmino): MsgTransferDenom {
    const message = createBaseMsgTransferDenom();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgTransferDenom): MsgTransferDenomAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgTransferDenomAminoMsg): MsgTransferDenom {
    return MsgTransferDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferDenom): MsgTransferDenomAminoMsg {
    return {
      type: "OmniFlix/onft/MsgTransferDenom",
      value: MsgTransferDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferDenomProtoMsg): MsgTransferDenom {
    return MsgTransferDenom.decode(message.value);
  },
  toProto(message: MsgTransferDenom): Uint8Array {
    return MsgTransferDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDenom): MsgTransferDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
      value: MsgTransferDenom.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDenomResponse(): MsgTransferDenomResponse {
  return {};
}
export const MsgTransferDenomResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
  encode(_: MsgTransferDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferDenomResponse>, I>>(_: I): MsgTransferDenomResponse {
    const message = createBaseMsgTransferDenomResponse();
    return message;
  },
  fromAmino(_: MsgTransferDenomResponseAmino): MsgTransferDenomResponse {
    const message = createBaseMsgTransferDenomResponse();
    return message;
  },
  toAmino(_: MsgTransferDenomResponse): MsgTransferDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferDenomResponseAminoMsg): MsgTransferDenomResponse {
    return MsgTransferDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDenomResponseProtoMsg): MsgTransferDenomResponse {
    return MsgTransferDenomResponse.decode(message.value);
  },
  toProto(message: MsgTransferDenomResponse): Uint8Array {
    return MsgTransferDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDenomResponse): MsgTransferDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
      value: MsgTransferDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintONFT(): MsgMintONFT {
  return {
    id: "",
    denomId: "",
    metadata: Metadata.fromPartial({}),
    data: "",
    transferable: false,
    extensible: false,
    nsfw: false,
    royaltyShare: "",
    sender: "",
    recipient: ""
  };
}
export const MsgMintONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
  encode(message: MsgMintONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.nsfw === true) {
      writer.uint32(56).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(66).string(message.royaltyShare);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(82).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.transferable = reader.bool();
          break;
        case 6:
          message.extensible = reader.bool();
          break;
        case 7:
          message.nsfw = reader.bool();
          break;
        case 8:
          message.royaltyShare = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintONFT>, I>>(object: I): MsgMintONFT {
    const message = createBaseMsgMintONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    message.data = object.data ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgMintONFTAmino): MsgMintONFT {
    const message = createBaseMsgMintONFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    }
    if (object.extensible !== undefined && object.extensible !== null) {
      message.extensible = object.extensible;
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (object.royalty_share !== undefined && object.royalty_share !== null) {
      message.royaltyShare = object.royalty_share;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgMintONFT): MsgMintONFTAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.data = message.data === "" ? undefined : message.data;
    obj.transferable = message.transferable === false ? undefined : message.transferable;
    obj.extensible = message.extensible === false ? undefined : message.extensible;
    obj.nsfw = message.nsfw === false ? undefined : message.nsfw;
    obj.royalty_share = message.royaltyShare === "" ? undefined : message.royaltyShare;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgMintONFTAminoMsg): MsgMintONFT {
    return MsgMintONFT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintONFT): MsgMintONFTAminoMsg {
    return {
      type: "OmniFlix/onft/MsgMintONFT",
      value: MsgMintONFT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintONFTProtoMsg): MsgMintONFT {
    return MsgMintONFT.decode(message.value);
  },
  toProto(message: MsgMintONFT): Uint8Array {
    return MsgMintONFT.encode(message).finish();
  },
  toProtoMsg(message: MsgMintONFT): MsgMintONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
      value: MsgMintONFT.encode(message).finish()
    };
  }
};
function createBaseMsgMintONFTResponse(): MsgMintONFTResponse {
  return {};
}
export const MsgMintONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
  encode(_: MsgMintONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintONFTResponse>, I>>(_: I): MsgMintONFTResponse {
    const message = createBaseMsgMintONFTResponse();
    return message;
  },
  fromAmino(_: MsgMintONFTResponseAmino): MsgMintONFTResponse {
    const message = createBaseMsgMintONFTResponse();
    return message;
  },
  toAmino(_: MsgMintONFTResponse): MsgMintONFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintONFTResponseAminoMsg): MsgMintONFTResponse {
    return MsgMintONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintONFTResponseProtoMsg): MsgMintONFTResponse {
    return MsgMintONFTResponse.decode(message.value);
  },
  toProto(message: MsgMintONFTResponse): Uint8Array {
    return MsgMintONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintONFTResponse): MsgMintONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
      value: MsgMintONFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferONFT(): MsgTransferONFT {
  return {
    id: "",
    denomId: "",
    sender: "",
    recipient: ""
  };
}
export const MsgTransferONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
  encode(message: MsgTransferONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferONFT>, I>>(object: I): MsgTransferONFT {
    const message = createBaseMsgTransferONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgTransferONFTAmino): MsgTransferONFT {
    const message = createBaseMsgTransferONFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgTransferONFT): MsgTransferONFTAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgTransferONFTAminoMsg): MsgTransferONFT {
    return MsgTransferONFT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferONFT): MsgTransferONFTAminoMsg {
    return {
      type: "OmniFlix/onft/MsgTransferONFT",
      value: MsgTransferONFT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferONFTProtoMsg): MsgTransferONFT {
    return MsgTransferONFT.decode(message.value);
  },
  toProto(message: MsgTransferONFT): Uint8Array {
    return MsgTransferONFT.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferONFT): MsgTransferONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
      value: MsgTransferONFT.encode(message).finish()
    };
  }
};
function createBaseMsgTransferONFTResponse(): MsgTransferONFTResponse {
  return {};
}
export const MsgTransferONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
  encode(_: MsgTransferONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferONFTResponse>, I>>(_: I): MsgTransferONFTResponse {
    const message = createBaseMsgTransferONFTResponse();
    return message;
  },
  fromAmino(_: MsgTransferONFTResponseAmino): MsgTransferONFTResponse {
    const message = createBaseMsgTransferONFTResponse();
    return message;
  },
  toAmino(_: MsgTransferONFTResponse): MsgTransferONFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferONFTResponseAminoMsg): MsgTransferONFTResponse {
    return MsgTransferONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferONFTResponseProtoMsg): MsgTransferONFTResponse {
    return MsgTransferONFTResponse.decode(message.value);
  },
  toProto(message: MsgTransferONFTResponse): Uint8Array {
    return MsgTransferONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferONFTResponse): MsgTransferONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
      value: MsgTransferONFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnONFT(): MsgBurnONFT {
  return {
    id: "",
    denomId: "",
    sender: ""
  };
}
export const MsgBurnONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
  encode(message: MsgBurnONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnONFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnONFT>, I>>(object: I): MsgBurnONFT {
    const message = createBaseMsgBurnONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgBurnONFTAmino): MsgBurnONFT {
    const message = createBaseMsgBurnONFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgBurnONFT): MsgBurnONFTAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.denom_id = message.denomId === "" ? undefined : message.denomId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgBurnONFTAminoMsg): MsgBurnONFT {
    return MsgBurnONFT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurnONFT): MsgBurnONFTAminoMsg {
    return {
      type: "OmniFlix/onft/MsgBurnONFT",
      value: MsgBurnONFT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnONFTProtoMsg): MsgBurnONFT {
    return MsgBurnONFT.decode(message.value);
  },
  toProto(message: MsgBurnONFT): Uint8Array {
    return MsgBurnONFT.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnONFT): MsgBurnONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
      value: MsgBurnONFT.encode(message).finish()
    };
  }
};
function createBaseMsgBurnONFTResponse(): MsgBurnONFTResponse {
  return {};
}
export const MsgBurnONFTResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
  encode(_: MsgBurnONFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnONFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnONFTResponse>, I>>(_: I): MsgBurnONFTResponse {
    const message = createBaseMsgBurnONFTResponse();
    return message;
  },
  fromAmino(_: MsgBurnONFTResponseAmino): MsgBurnONFTResponse {
    const message = createBaseMsgBurnONFTResponse();
    return message;
  },
  toAmino(_: MsgBurnONFTResponse): MsgBurnONFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnONFTResponseAminoMsg): MsgBurnONFTResponse {
    return MsgBurnONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnONFTResponseProtoMsg): MsgBurnONFTResponse {
    return MsgBurnONFTResponse.decode(message.value);
  },
  toProto(message: MsgBurnONFTResponse): Uint8Array {
    return MsgBurnONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnONFTResponse): MsgBurnONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
      value: MsgBurnONFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
export interface Msg {
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
  PurgeDenom(request: MsgPurgeDenom): Promise<MsgPurgeDenomResponse>;
  MintONFT(request: MsgMintONFT): Promise<MsgMintONFTResponse>;
  TransferONFT(request: MsgTransferONFT): Promise<MsgTransferONFTResponse>;
  BurnONFT(request: MsgBurnONFT): Promise<MsgBurnONFTResponse>;
  /**
   * UpdateParams defines a governance operation for updating the onft module
   * parameters. The authority is hard-coded to the onft module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDenom = this.CreateDenom.bind(this);
    this.UpdateDenom = this.UpdateDenom.bind(this);
    this.TransferDenom = this.TransferDenom.bind(this);
    this.PurgeDenom = this.PurgeDenom.bind(this);
    this.MintONFT = this.MintONFT.bind(this);
    this.TransferONFT = this.TransferONFT.bind(this);
    this.BurnONFT = this.BurnONFT.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  }
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "UpdateDenom", data);
    return promise.then(data => MsgUpdateDenomResponse.decode(new BinaryReader(data)));
  }
  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse> {
    const data = MsgTransferDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "TransferDenom", data);
    return promise.then(data => MsgTransferDenomResponse.decode(new BinaryReader(data)));
  }
  PurgeDenom(request: MsgPurgeDenom): Promise<MsgPurgeDenomResponse> {
    const data = MsgPurgeDenom.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "PurgeDenom", data);
    return promise.then(data => MsgPurgeDenomResponse.decode(new BinaryReader(data)));
  }
  MintONFT(request: MsgMintONFT): Promise<MsgMintONFTResponse> {
    const data = MsgMintONFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "MintONFT", data);
    return promise.then(data => MsgMintONFTResponse.decode(new BinaryReader(data)));
  }
  TransferONFT(request: MsgTransferONFT): Promise<MsgTransferONFTResponse> {
    const data = MsgTransferONFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "TransferONFT", data);
    return promise.then(data => MsgTransferONFTResponse.decode(new BinaryReader(data)));
  }
  BurnONFT(request: MsgBurnONFT): Promise<MsgBurnONFTResponse> {
    const data = MsgBurnONFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "BurnONFT", data);
    return promise.then(data => MsgBurnONFTResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}