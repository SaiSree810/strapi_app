import * as React from 'react';

import {
  BaseLink,
  Button,
  Field,
  FieldInput,
  FieldLabel as BaseFieldLabel,
  Flex,
  Popover,
} from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { type Element, Editor, Path, Range, Transforms } from 'slate';
import { type RenderElementProps, ReactEditor } from 'slate-react';
import styled from 'styled-components';

import { composeRefs } from '../../../utils/refs';
import { type BlocksStore, useBlocksEditorContext } from '../BlocksEditor';
import { editLink, removeLink } from '../utils/links';
import { type Block } from '../utils/types';

const StyledBaseLink = styled(BaseLink)`
  text-decoration: none;
`;

const FieldLabel = styled(BaseFieldLabel)`
  margin-bottom: ${({ theme }) => theme.spaces[1]};
`;

const RemoveButton = styled(Button)<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

interface LinkContentProps extends RenderElementProps {
  link: Block<'link'>;
}

const LinkContent = React.forwardRef<HTMLAnchorElement, LinkContentProps>(
  ({ link, children, attributes }, forwardedRef) => {
    const { formatMessage } = useIntl();
    const { editor } = useBlocksEditorContext('Link');
    const path = ReactEditor.findPath(editor, link);
    const [popoverOpen, setPopoverOpen] = React.useState(
      editor.lastInsertedLinkPath ? Path.equals(path, editor.lastInsertedLinkPath) : false
    );
    const linkRef = React.useRef<HTMLAnchorElement>(null!);
    const elementText = link.children.map((child) => child.text).join('');
    const [linkText, setLinkText] = React.useState(elementText);
    const [linkUrl, setLinkUrl] = React.useState(link.url);
    const linkInputRef = React.useRef<HTMLInputElement>(null);
    const [showRemoveButton, setShowRemoveButton] = React.useState(false);

    const handleOpenEditPopover: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      e.preventDefault();
      setPopoverOpen(true);
      setShowRemoveButton(true);
    };

    const handleSave: React.FormEventHandler = (e) => {
      e.stopPropagation();

      // If the selection is collapsed, we select the parent node because we want all the link to be replaced)
      if (editor.selection && Range.isCollapsed(editor.selection)) {
        const [, parentPath] = Editor.parent(editor, editor.selection.focus?.path);
        Transforms.select(editor, parentPath);
      }

      editLink(editor, { url: linkUrl, text: linkText });
      setPopoverOpen(false);
    };

    const handleDismiss = () => {
      setPopoverOpen(false);

      if (link.url === '') {
        removeLink(editor);
      }

      ReactEditor.focus(editor);
    };

    const composedRefs = composeRefs(linkRef, forwardedRef);

    const isSaveDisabled =
      !linkText ||
      !linkUrl ||
      (link.url && link.url === linkUrl && elementText && elementText === linkText);

    React.useEffect(() => {
      // Focus on the link input element when the popover opens
      if (popoverOpen) linkInputRef.current?.focus();
    }, [popoverOpen]);

    return (
      <>
        <StyledBaseLink
          {...attributes}
          ref={composedRefs}
          href={link.url}
          onClick={handleOpenEditPopover}
          color="primary600"
        >
          {children}
        </StyledBaseLink>
        {popoverOpen && (
          <Popover source={linkRef} onDismiss={handleDismiss} padding={4} contentEditable={false}>
            <Flex as="form" onSubmit={handleSave} direction="column" gap={4}>
              <Field width="368px">
                <FieldLabel>
                  {formatMessage({
                    id: 'components.Blocks.popover.text',
                    defaultMessage: 'Text',
                  })}
                </FieldLabel>
                <FieldInput
                  name="text"
                  placeholder={formatMessage({
                    id: 'components.Blocks.popover.text.placeholder',
                    defaultMessage: 'Enter link text',
                  })}
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                />
              </Field>
              <Field width="368px">
                <FieldLabel>
                  {formatMessage({
                    id: 'components.Blocks.popover.link',
                    defaultMessage: 'Link',
                  })}
                </FieldLabel>
                <FieldInput
                  ref={linkInputRef}
                  name="url"
                  placeholder="https://strapi.io"
                  value={linkUrl}
                  onChange={(e) => {
                    setLinkUrl(e.target.value);
                  }}
                />
              </Field>
              <Flex justifyContent="space-between" width="100%">
                <RemoveButton
                  variant="danger-light"
                  onClick={() => removeLink(editor)}
                  visible={showRemoveButton}
                >
                  {formatMessage({
                    id: 'components.Blocks.popover.remove',
                    defaultMessage: 'Remove',
                  })}
                </RemoveButton>
                <Flex gap={2}>
                  <Button variant="tertiary" onClick={handleDismiss}>
                    {formatMessage({
                      id: 'components.Blocks.popover.cancel',
                      defaultMessage: 'Cancel',
                    })}
                  </Button>
                  <Button type="submit" disabled={Boolean(isSaveDisabled)}>
                    {formatMessage({
                      id: 'components.Blocks.popover.save',
                      defaultMessage: 'Save',
                    })}
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Popover>
        )}
      </>
    );
  }
);

const isLink = (element: Element): element is Block<'link'> => {
  return element.type === 'link';
};

const Link = React.forwardRef<HTMLAnchorElement, RenderElementProps>((props, forwardedRef) => {
  if (!isLink(props.element)) {
    return null;
  }

  // LinkContent uses React hooks that rely on props.element being a link. If the type guard above
  // doesn't pass, those hooks would be called conditionnally, which is not allowed.
  // Hence the need for a separate component.
  return <LinkContent {...props} link={props.element} ref={forwardedRef} />;
});

const linkBlocks: Pick<BlocksStore, 'link'> = {
  link: {
    renderElement: (props) => (
      <Link element={props.element} attributes={props.attributes}>
        {props.children}
      </Link>
    ),
    // No handleConvert here, links are created via the link button in the toolbar
    matchNode: (node) => node.type === 'link',
    isInBlocksSelector: false,
  },
};

export { linkBlocks };
