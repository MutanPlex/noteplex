import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ColorPicker } from "primereact/colorpicker";

import "./Editor.css";
const theme = {
  // Theme styling goes here
  // ...
};
function onChange(editorState) {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

const AddNote = () => {
  const editorConfig = {
    namespace: "MyEditor",
    onError: (error) => {
      console.error("Lexical Error:", error);
    },
    theme,
  };

  return (
    <div>
      <h1>Add Note</h1>

      <div className="notes-container">
        <div className="title-container">
          <input type="text" placeholder="Title" className="title-input" />
        </div>
        <LexicalComposer initialConfig={editorConfig}>
          <div className="editor-container">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={
                <div className="placeholder">Enter your note...</div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <OnChangePlugin onChange={onChange} />
            <HistoryPlugin />
          </div>
        </LexicalComposer>
        <div className="note-colors">
          <label htmlFor="input-color">Choose a note color:</label>
          <ColorPicker className="colorpicker" inputId="input-color" />
        </div>

        <div className="button-container">
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
