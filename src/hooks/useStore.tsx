import create from 'zustand';

const useStore = create((set) => ({
    state: {
        type: "primary", // 默认值，你可以根据实际需要调整
    },
    setState: (newState: any) => set({state: newState}),
}));

export default useStore;