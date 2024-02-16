export declare const pseudoDescriptorsBase: {
    readonly hoverStyle: {
        readonly name: "hover";
        readonly priority: 1;
    };
    readonly pressStyle: {
        readonly name: "active";
        readonly stateKey: "press";
        readonly priority: 2;
    };
    readonly focusVisibleStyle: {
        readonly name: "focus-visible";
        readonly priority: 3;
        readonly stateKey: "focusVisible";
    };
    readonly focusStyle: {
        readonly name: "focus";
        readonly priority: 3;
    };
};
export declare const pseudoPriorities: {
    hover: number;
    press: number;
    focus: number;
    focusVisible: number;
};
export declare const pseudoDescriptors: Record<'hoverStyle' | 'pressStyle' | 'focusStyle' | 'focusVisibleStyle' | 'enterStyle' | 'exitStyle', PseudoDescriptor>;
export type PseudoDescriptor = {
    name: string;
    priority: number;
    stateKey?: string;
    selector?: string;
};
export type PseudoDescriptors = {
    [Key in keyof typeof pseudoDescriptors]: PseudoDescriptor;
};
//# sourceMappingURL=pseudoDescriptors.d.ts.map