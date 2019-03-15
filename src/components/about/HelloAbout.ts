import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './hello-about.html';

const decimal: number = 12;

@WithRender
@Component
export default class HelloAbout extends Vue {
    public myReamName = 'Jay ' + decimal;
    public message: number = 0;

    // computed
    get MyName(): string {
        return `this is MyName function ${this.myReamName}`;
    }

    // method
    public sayHi(): void {
        // alert(`Hello ${this.myReamName}`);
        console.log(`Hello ${this.myReamName}`);
    }

    public submitInput(): void {
        this.message = 123 * Math.random();
    }

    // mounted
    public mounted() {
        this.sayHi();
    }
}
