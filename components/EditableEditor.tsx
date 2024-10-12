"use client";
import React, { useEffect, useCallback } from "react";
import { useTheme } from "next-themes";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const EditableEditor = ({ value, onChange }: Props) => {
  const { theme } = useTheme();
  const blockNoteTheme =
    theme === "light" || theme === "dark" ? theme : "light";

  const editor = useCreateBlockNote();

  const handleConvertHtmlToBlock = useCallback(async () => {
    if (value) {
      const blocks = await editor.tryParseHTMLToBlocks(value);
      editor.replaceBlocks(editor.document, blocks);
    }
  }, [editor, value]);

  const handleEditorUpdate = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    if (html !== undefined && html !== "") {
      onChange(html);
    }
  };

  useEffect(() => {
    handleConvertHtmlToBlock();
  }, [handleConvertHtmlToBlock]);

  return (
    <div className="-mx-[54px] my-4">
      <BlockNoteView
        editor={editor}
        theme={blockNoteTheme}
        editable={true}
        onChange={handleEditorUpdate}
      />
    </div>
  );
};

export default EditableEditor;
