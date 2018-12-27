import React from 'react';

import { css } from 'emotion';
import { palette } from '@guardian/pasteup/palette';
import { sans } from '@guardian/pasteup/typography';

const captionFont = css`
    font-size: 12px;
    line-height: 16px;
    font-family: ${sans.body};
    color: ${palette.neutral[46]};
`;

const dateline = css`
    ${captionFont};

    padding-top: 2px;
    margin-bottom: 6px;
`;

const Dateline: React.SFC<{
    dateDisplay: string;
}> = ({ dateDisplay }) => (
    <>
        <div className={dateline}>{dateDisplay}</div>
    </>
);

export default Dateline;
