export class Utilities {
    prop1: any;
    static prop2: any;
    getLengthPlusExtra(arr: any[]) {
        return arr.length + this.prop1;
    }

    static getFirstElement(arr: any[]) {
        return arr ? arr[0] : null;
    }
}