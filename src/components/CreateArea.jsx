import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, enterNote] = useState({
       title:"",
       content:""
  }); 
  
  function handleChange(event){
       const {name, value} = event.target;

       enterNote( prevNote=>{
            return {
                 ...prevNote,
                 [name]:value
          };
       });
  }

  function submitNote(event){

       props.onAdd(note);
       enterNote({
          title:"",
          content:""
       })
       event.preventDefault();
  }

  function expand(){
     setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input 
          name="title" 
          onChange={handleChange}
          value={note.title} 
          placeholder="Title" 
        />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..." 
          rows={ isExpanded ? 3 : 1} 

        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
               <AddIcon />       
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
