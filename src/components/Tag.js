import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];
class Tag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            suggestions: [
             ],
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }


    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });

    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
        
    }


    tagChange(event){
       const temp = this.state.tags;
      let allTagsUp = temp.map((tag)=>tag.id)
        this.props.tagChangeCard(allTagsUp)
        
    }


    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }

    updateTags(){
        this.setState({tags:this.props.tags})
    }

    render() {

        let { tags } = this.state;
        return (
            <div   className='bg-light-blue db flex br3 pa0  ma2  bw2 shadow-5'>
                <ReactTags tags={tags}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                     />
            </div>
        )
        
        
      }

	  	componentDidUpdate () {
	           this.tagChange()		
            
	    }

};

export default Tag