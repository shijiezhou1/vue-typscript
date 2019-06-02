import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './hello-world.html';

@WithRender
@Component
export default class HelloWorld extends Vue {
    public myReamName = 'Jay';
    public msg: string = 'I am using TypeScript classes with Vue!';

    @Prop( {default: '- Prop String'} )
    public newText!: string;

    @Prop( {default: '- Prop Integer' })
    public newNum!: number;
}
