import mitt from 'mitt';

type IUseEventbus = {
  emitEvent: (eventName: symbol, val: any) => void;
  onEvent: (eventName: symbol, callback: (val: any) => void) => void;
};

const emitter = mitt();

const emitEvent = (eventName: symbol, val: any) => {
  emitter.emit(eventName, val);
};

const onEvent = (eventName: symbol, callback: (val: any) => void) => {
  emitter.on(eventName, callback);
};


export const useEvent = (): IUseEventbus => {

  return {
    emitEvent,
    onEvent,
  };
};
