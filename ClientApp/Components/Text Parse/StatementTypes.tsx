
import { SemanticICONS } from "semantic-ui-react";

export enum eStatementType {

    // String comparison
    String_Comp = 0,
    // Skip whitespace operation
    SkipWS_Op = 1,
    // Or comparison
    Or_Comp = 2,

    // Keep this as the last item because it's used to determine the number of statement types
    phCount = 3,
};

export interface ITextParseStatementState {
    statement: TextParseStatement;
    SetStatement: (input: TextParseStatement) => void;
};

// Parse statement base class
export abstract class TextParseStatement {
    public abstract CanSave(): boolean;
    public abstract TypeDescription(): string; // This is static but you can't use abstract and static together in TS
    public abstract Copy(): TextParseStatement;
    public abstract Description(): string;
    public abstract Icon(): SemanticICONS;
    public abstract Children(): TextParseStatement[] | null;

    public abstract SetSelectedChildIdx(idx: number): void;
    public abstract GetSelectedChildIdx(): number;

    public type: eStatementType;
    public name: string;
    public keyedDescription?: string;

    public static GetName(stmt: TextParseStatement): string {
        return stmt.name;
    }

    public static SetName(stmt: TextParseStatement, name: string): void {
        stmt.name=name;
    }

    public static GetKeyedDescription(stmt: TextParseStatement): string {
        return ((stmt.keyedDescription) ? stmt.keyedDescription : "");
    }

    public static SetKeyedDescription(stmt: TextParseStatement, description?: string): void {
        stmt.keyedDescription=description;
    }

    public Heading(): string {

        const { keyedDescription, name, Description } = this;

        if(keyedDescription) {
            return keyedDescription;
        }

        const description = Description();
        if(description) {
            return description;
        }

        return name;
    }

    constructor(copy?: TextParseStatement) {
        if(copy) {
            this.type=copy.type;
            this.name=copy.name;
            this.keyedDescription=copy.keyedDescription;
        }
        else {
            this.name="";
            this.keyedDescription=null;
        }

        this.Heading=this.Heading.bind(this);
        this.CanSave=this.CanSave.bind(this);
        this.TypeDescription=this.TypeDescription.bind(this);
        this.Copy=this.Copy.bind(this);
        this.Description=this.Description.bind(this);
        this.Icon=this.Icon.bind(this);
    }
};

export class StringComparisonStatement extends TextParseStatement {

    public str: string;
    public caseSensitive: boolean;

    public static SetStr(stmt: StringComparisonStatement, str: string): void {
        stmt.str=str;
    }

    public static GetStr(stmt: StringComparisonStatement): string {
        return stmt.str;
    }

    public static ValidateStr(stmt: StringComparisonStatement): boolean {
        return (stmt.str !== null && stmt.str !== "");
    }

    constructor(copy?: StringComparisonStatement) {
        super(copy);
        if(copy) {
            this.str=copy.str;
            this.caseSensitive=copy.caseSensitive;
        }
        else {
            this.type=eStatementType.String_Comp;
            this.str="";
            this.caseSensitive=true;
        }
    }

    CanSave(): boolean {
        if(!StringComparisonStatement.ValidateStr(this)) {
            return false;
        }

        return true;
    }

    TypeDescription(): string {
        return "String Comparison";
    }

    Copy(): StringComparisonStatement {
        const copy=new StringComparisonStatement(this);
        return copy;
    }

    Description(): string {
        const { CanSave, str, caseSensitive} = this;
        
        if(!CanSave()) {
            return null;
        }

        return `Compare against string '${str}' (case ${((!caseSensitive)?"in":"")}sensitive)`;
    }

    Icon(): SemanticICONS {
        return "pencil";
    }

    Children(): TextParseStatement[] | null {
        return null;
    }

    SetSelectedChildIdx(idx: number | null): void
    {
    }
    
    GetSelectedChildIdx(): number | null
    {
        return null;
    }
};

export class SkipWSStatement extends TextParseStatement {

    constructor(copy?: SkipWSStatement) {
        super(copy);
        if(!copy) {
            this.type=eStatementType.SkipWS_Op;
        }
    }

    CanSave(): boolean {
        return true;
    }

    TypeDescription(): string {
        return "Skip Whitespace Operation";
    }

    Copy(): SkipWSStatement {
        const copy=new SkipWSStatement(this);
        return copy;
    }

    Description(): string {
        const { CanSave } = this;
        
        if(!CanSave()) {
            return null;
        }

        return "Skip whitespace";
    }

    Icon(): SemanticICONS {
        return "angle double right";
    }

    Children(): TextParseStatement[] | null {
        return null;
    }

    SetSelectedChildIdx(idx: number | null): void
    {
    }
    
    GetSelectedChildIdx(): number | null
    {
        return null;
    }
};

export class OrComparisonStatement extends TextParseStatement {

    children: Array<TextParseStatement>;
    selectedChildIdx: number;

    constructor(copy?: OrComparisonStatement,copyChildren: boolean=false) {
        super(copy);
        if(!copy) {
            this.type=eStatementType.Or_Comp;
            this.children = new Array<TextParseStatement>();
            this.selectedChildIdx=null;
        } else {
            if(copyChildren) this.children = copy.children.map(item => item.Copy());
            else this.children=null;

            this.selectedChildIdx=copy.selectedChildIdx;
        }
    }

    CanSave(): boolean {
        return false;
    }

    TypeDescription(): string {
        return "Or Comparison";
    }

    Copy(): OrComparisonStatement {
        const copy=new OrComparisonStatement(this);
        return copy;
    }

    Description(): string {
        const { CanSave } = this;
        
        if(!CanSave()) {
            return null;
        }

        return "Or Comparison"; //sidtodo
    }

    Icon(): SemanticICONS {
        return "unordered list";
    }

    Children(): TextParseStatement[] | null {
        return this.children;
    }

    SetSelectedChildIdx(idx: number | null): void
    {
        this.selectedChildIdx=idx;
    }
    
    GetSelectedChildIdx(): number | null
    {
        return this.selectedChildIdx;
    }
}