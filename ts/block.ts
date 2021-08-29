class BlockPrefab {
    name: string;
    duration: number;
    pin: boolean;

    constructor(name: string, duration: number) {
        this.duration = duration;
        this.pin = false;
        this.name = name;
    }
}

class Block {
    prefab: BlockPrefab;
    startTime: Date = new Date();

    constructor(prefab: BlockPrefab) {
        this.prefab = prefab;
    }
}

class Schedule {
    blocks: Block[] = [];
}