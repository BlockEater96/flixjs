//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.feegrant.module.v1";
/** Module is the config object of the feegrant module. */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.feegrant.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the feegrant module. */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
function createBaseModule(): Module {
  return {};
}
export const Module = {
  typeUrl: "/cosmos.feegrant.module.v1.Module",
  encode(_: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(_: I): Module {
    const message = createBaseModule();
    return message;
  },
  fromAmino(_: ModuleAmino): Module {
    const message = createBaseModule();
    return message;
  },
  toAmino(_: Module): ModuleAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};