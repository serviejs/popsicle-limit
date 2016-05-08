declare function popsicleLimit (duration: number, count: number): (req: any, next: () => any) => any;

export = popsicleLimit;
