import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './hello-world.html';

@WithRender
@Component
export default class HelloWorld extends Vue {
    public count = 0;
    public msg: string = 'I am using TypeScript classes with Vue!';

    @Prop( {default: 'Example Prop'} )
    public newText!: string;

    @Prop( {default: 123 })
    public newNum!: number;
}
