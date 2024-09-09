import clsx from 'clsx';

interface TileProps {
    id: number;
    title: string;
    description: string;
    bgImageUrl: string;
}

export default function TileComponent({ id, title, description, bgImageUrl }: TileProps) {
    const tileStyle = {
        backgroundImage: `url(${bgImageUrl})`,
    };

    switch (id%4) {
        case 1:
            return (
                <div
                    style={tileStyle}
                    className="h-96 bg-contain bg-center bg-no-repeat col-span-2"
                >
                    <div className="bg-red-800/80 hover:bg-red-800/50 size-full">
                        <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
                    
                </div>
            );
        case 2:
            return (
                <div
                    style={tileStyle}
                    className="h-96 bg-contain bg-center bg-no-repeat"
                >
                    <div className="bg-blue-800/80 hover:bg-blue-800/50 size-full">
                        <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
                    
                </div>
            );
        case 3:
            return (
                <div
                    style={tileStyle}
                    className="h-96 bg-contain bg-center bg-no-repeat"
                >
                    <div className="bg-green-800/80 hover:bg-green-800/50 size-full">
                        <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
                    
                </div>
            );
        case 0:
            return (
                <div
                    style={tileStyle}
                    className="h-96 bg-contain bg-center bg-no-repeat col-span-2"
                >
                    <div className="bg-yellow-800/80 hover:bg-yellow-800/50 size-full">
                        <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
                    
                </div>
            );
    }

    
}