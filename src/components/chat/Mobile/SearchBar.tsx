import React from 'react';
import { Search, Grid } from 'semantic-ui-react';
import _ from 'lodash';

interface IProps{
    chats: any[];
    onSelect: (d: any) => void;
}

interface IState{
    isLoading: boolean;
    value: string;
    results: any[];
    chatsReform: any[];
}

const initialState = {
    isLoading: false,
    value: '',
    results: []
}

export class SearchBar extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {...initialState, chatsReform:[]};
    }

    componentWillMount(){
        this.restructureResults();
    }

    restructureResults = () =>{
        this.setState({isLoading: true})
        var temp: any[] = []
        this.props.chats.map((chat: any) => {
            temp = temp.concat({title: chat.name, image: chat.imageURL})
        })
        this.setState({isLoading: false, chatsReform: temp})
        
    }

    handleSearchChange = (e: React.MouseEvent<HTMLElement, MouseEvent>, {value}: any) => {

        this.setState({isLoading: true, value});
        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState({...initialState, chatsReform: this.state.chatsReform});

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = (result: any) => re.test(result.title);
            console.log("options: ", this.state.chatsReform );
            
            this.setState({
                isLoading: false,
                results: _.filter(this.state.chatsReform, isMatch),
              })
        },300);
    }

    handleResultSelect = (e: React.MouseEvent<HTMLElement, MouseEvent>, { result }: any) => {
        this.setState({ value: result.title });
        console.log("search result: ", this.props.chats.find(chat => chat.name === result.title));
        
        this.props.onSelect(this.props.chats.find(chat => chat.name === result.title));
    }

    render(){
        return(
            <Grid centered columns="16">
                <div style={{ flex: 1, justifyContent: 'center', marginTop:"10px", marginBottom:"10px" }}>
                    <Grid.Column width="16">
                        <Search 
                            fluid 
                            size="big" 
                            input={{fluid: true}} 
                            onSearchChange={this.handleSearchChange}
                            onResultSelect={this.handleResultSelect}
                            results={this.state.results}
                            value={this.state.value}
                            />
                    </Grid.Column>
                </div>
            </Grid>
        )
    }
}