import { Card } from './components';

function App() {
    return (
        <div className="min-h-screen">
            <h1>Player Depth Chart</h1>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="sticky top-6">
                        <Card title={'Add Player'}>
                            <button>Add Player</button>
                        </Card>
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
