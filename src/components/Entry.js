import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function Entry() {
  return (
    <div className="entry">
      <Editor
        toolbarClassName="toolbar"
        wrapperClassName="wrapper"
        editorClassName="editor"
        placeholder="Start typing here..."
        toolbar={{
          options: ["inline"],
          inline: {
            inDropdown: false,
            options: ["bold", "italic", "underline", "strikethrough"],
          },
        }}
      />
    </div>
  );
}

export default Entry;
