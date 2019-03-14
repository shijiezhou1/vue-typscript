import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './hello-about.html';

@WithRender
@Component
export default class HelloAbout extends Vue {
    public myReamName = 'Jay';
    // computed
    get MyName(): string {
        return `this is MyName function ${this.myReamName}`;
    }

    // method
    public sayHi(): void {
        // alert(`Hello ${this.myReamName}`);
        console.log(`Hello ${this.myReamName}`);
    }

    // mounted
    public mounted() {
        this.sayHi();
    }
}
