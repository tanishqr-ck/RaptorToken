import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'balanceOf' : ActorMethod<[Principal], bigint>,
  'claimToken' : ActorMethod<[], string>,
  'getSymbol' : ActorMethod<[], string>,
  'transfer' : ActorMethod<[Principal, bigint], string>,
}
