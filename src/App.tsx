import { useState } from 'react';
import type { Errors, Player } from './common/types';
import { Card } from './components';
import { CreateNewPlayerForm } from './components/CreateNewPlayerForm';

const playerMap = new Map<string, Player>();

function App() {
    const [errors, setErrors] = useState<Errors>({});

    return (
        <div className="min-h-screen">
            <h1 className="mb-3">Player Depth Chart</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <div className="md:sticky md:top-6">
                        <CreateNewPlayerForm
                            playerMap={playerMap}
                            errors={errors}
                            setErrors={setErrors}
                        />
                        <Card title={'Filter'}></Card>
                    </div>
                </div>
                <div className="col-span-2">
                    <Card title={'Depth Chart'}></Card>
                    <Card title={'Depth Chart'}></Card>
                    <Card title={'Depth Chart'}></Card>
                    <Card title={'Depth Chart'}></Card>
                </div>
            </div>
        </div>
    );
}

export default App;
