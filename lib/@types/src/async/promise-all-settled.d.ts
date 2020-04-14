declare const allSettled: (promises: Promise<any>[]) => Promise<({
    status: string;
    value: any;
} | {
    status: string;
    reason: any;
})[]>;
export { allSettled };
//# sourceMappingURL=promise-all-settled.d.ts.map