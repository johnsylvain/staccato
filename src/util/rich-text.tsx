import * as React from 'react';
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer';
import { MARKS, BLOCKS, Document } from '@contentful/rich-text-types';
import { Text, Span } from '../components/text';

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: text => <Span bold>{text}</Span>,
    [MARKS.ITALIC]: text => <Span italic>{text}</Span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Text lineHeight={1.5} mb={2}>
        {children}
      </Text>
    ),
  },
};

export const renderRichText = (document: Document) =>
  documentToReactComponents(document, options);
