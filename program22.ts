class Stud_ent {
    constructor(
        public id: number,
        public name: string
    ) {}

    display(): void {
        console.log(this.id, this.name);
    }
}

let st1 = new Stud_ent(16, "Mounika");
st1.display();