import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Errors, Player } from '../common/types';
import { Card } from './Card';
import { ErrorBox } from './ErrorBox';
import { LabelTextInput } from './LabelTextInput';

interface CreateNewPlayerFormProps {
    playerMap: Map<string, Player>;
    errors: Errors;
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
}

export const CreateNewPlayerForm = ({
    playerMap,
    errors,
    setErrors,
}: CreateNewPlayerFormProps) => {
    const [player, setPlayer] = useState<Player | undefined>();

    const handleCreatePlayer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!player?.name || player.name.trim() === '') {
            setErrors({ ...errors, addPlayer: 'Player name cannot be empty' });
            return;
        }

        const playerId: string = uuidv4();
        playerMap.set(playerId, { id: playerId, name: player.name });

        setPlayer(undefined);
        setErrors({});
    };

    return (
        <Card title={'Create New Player'}>
            <form onSubmit={handleCreatePlayer}>
                <LabelTextInput
                    labelText="Player Name"
                    inputText="Enter player name"
                    name="name"
                    value={player?.name || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPlayer({
                            ...player,
                            id: player?.id || '',
                            name: event.target.value,
                        });
                    }}
                />
                <input type="submit" value="Create New Player" />
            </form>
            {errors.addPlayer && <ErrorBox message={errors.addPlayer} />}
        </Card>
    );
};
