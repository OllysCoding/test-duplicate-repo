import React from 'react';
import { css } from 'emotion';

import { textSans } from '@guardian/src-foundations/typography';
// import { text } from '@guardian/src-foundations/palette';

type Props = {
    title: string;
    players: PlayerType[];
};

const Row = ({ children }: { children: React.ReactNode }) => (
    <div
        className={css`
            display: flex;
            flex-direction: row;
            position: relative;
        `}
    >
        {children}
    </div>
);

const Event = ({
    type,
    time,
}: {
    type: 'substitution' | 'dismissal' | 'booking';
    time: string;
}) => {
    switch (type) {
        case 'dismissal':
            return (
                <i
                    className={css`
                        display: inline-block;
                        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjEyIj48cGF0aCBmaWxsPSIjY2MyYjEyIiBkPSJNMCAwaDl2MTJIMHoiLz48L3N2Zz4=);
                        background-position: 0 0;
                        width: 0.5625rem;
                        height: 0.75rem;
                        transform: rotate(8deg);
                        background-size: contain;
                    `}
                />
            );
        case 'booking':
            return (
                <i
                    className={css`
                        display: inline-block;
                        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjEyIj48cGF0aCBmaWxsPSIjZmIwIiBkPSJNMCAwaDl2MTJIMHoiLz48L3N2Zz4=);
                        background-position: 0 0;
                        width: 0.5625rem;
                        height: 0.75rem;
                        transform: rotate(8deg);
                        background-size: contain;
                    `}
                />
            );
        case 'substitution':
            return <span>{`(s ${time}')`}</span>;
    }
};

export const Lineup = ({ title, players }: Props) => {
    return (
        <div
            className={css`
                ${textSans.small()}
            `}
        >
            <h4>{title}</h4>
            <ul>
                {players.map(player => (
                    <li>
                        <Row>
                            <div
                                className={css`
                                    font-weight: bold;
                                `}
                            >
                                {player.shirtNumber}
                            </div>
                            <div
                                className={css`
                                    position: absolute;
                                    left: 40px;
                                `}
                            >
                                <Row>
                                    {player.name}
                                    {player.events.map((event: EventType) => (
                                        <div
                                            className={css`
                                                margin-left: 4px;
                                            `}
                                        >
                                            <Event
                                                type={event.eventType}
                                                time={event.eventTime}
                                            />
                                        </div>
                                    ))}
                                </Row>
                            </div>
                        </Row>
                    </li>
                ))}
            </ul>
        </div>
    );
};
