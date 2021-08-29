let message: string = "Hello, World!";
console.log(message);

var schedule: Schedule = new Schedule();
var prefabs: BlockPrefab[] = [];

function init() {
    prefabs.push(new BlockPrefab("Wash Dishes", 15));
    prefabs.push(new BlockPrefab("Shower", 15));
    prefabs.push(new BlockPrefab("Shave", 20));

    var meeting = new BlockPrefab("Meeting", 60);
    meeting.pin = true;
    prefabs.push(meeting);

    for (let i = 0; i < prefabs.length; i++) {
        const prefab = prefabs[i];

        var el = document.createElement("p");
        el.draggable = true;
        el.className = "block";
        el.innerText = prefab.name + ", " + prefab.duration + "min" + (prefab.pin ? " 📌" : "");
        //document.body.appendChild(el);
        $("#prefabs_list").append(el);
    }

    schedule.blocks.push(new Block(prefabs[0]));
    schedule.blocks.push(new Block(prefabs[2]));

    UpdateSchedule();
}

function UpdateSchedule() {
    for (let i = 0; i < schedule.blocks.length; i++) {
        const block = schedule.blocks[i];

        var e = document.createElement("p");
        e.innerText = block.prefab.name;
        e.className = "block";
        e.style.height = (10 * block.prefab.duration).toString() + "px";

        e.style.top = "100px";

        $("#schedule").append(e);
    }
}

$(init);