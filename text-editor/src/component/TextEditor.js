import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    // Retrieve saved content from localStorage
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  // useEffect to save content to localStorage when editorState changes
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");

    if (savedContent) {
      try {
        const contentState = convertFromRaw(JSON.parse(savedContent));
        const newEditorState = EditorState.createWithContent(contentState);
        setEditorState(newEditorState);
      } catch (error) {
        console.error("Error loading content from localStorage:", error);
      }
    }
  }, []);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const keyBindingFn = (e) => {
    if (e.key === "#") {
      return "start-heading";
    }
    if (e.key === "*") {
      return "start-bold";
    }
    return getDefaultKeyBinding(e);
  };

  const handleBeforeInput = (chars, editorState) => {
    if (chars === "#") {
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
      const currentBlock = contentState.getBlockForKey(selection.getStartKey());
      const start = selection.getStartOffset();
      const line = currentBlock.getText();

      if (start === 0 && line.startsWith("# ")) {
        const newContentState = Modifier.replaceText(
          contentState,
          selection.merge({
            anchorOffset: 0,
            focusOffset: 2,
          }),
          ""
        );

        setEditorState(
          EditorState.push(editorState, newContentState, "remove-range")
        );

        // Change block type to heading
        const newEditorState = RichUtils.toggleBlockType(
          editorState,
          "header-one"
        );
        setEditorState(newEditorState);

        return "handled";
      }
    }

    if (chars === "*") {
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
      const currentBlock = contentState.getBlockForKey(selection.getStartKey());
      const start = selection.getStartOffset();
      const line = currentBlock.getText();

      if (start === 0 && line.startsWith("* ")) {
        const newContentState = Modifier.replaceText(
          contentState,
          selection.merge({
            anchorOffset: 0,
            focusOffset: 2,
          }),
          ""
        );

        setEditorState(
          EditorState.push(editorState, newContentState, "remove-range")
        );

        // Change inline style to bold
        const newEditorState = RichUtils.toggleInlineStyle(editorState, "BOLD");
        setEditorState(newEditorState);

        return "handled";
      }
    }

    return "not-handled";
  };

  const handleSave = () => {
    // Save content to localStorage
    const contentState = editorState.getCurrentContent();
    const contentStateJSON = JSON.stringify(convertToRaw(contentState));
    localStorage.setItem("editorContent", contentStateJSON);
  };

  return (
    <div className="container">
      <h1 className="title">Text Editor</h1>
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFn}
          handleBeforeInput={handleBeforeInput}
          placeholder="Type here..."
        />
      </div>
      <div className="save-btn">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default TextEditor;
