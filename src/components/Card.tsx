interface CardProps {
    title: string;
    children?: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => (
    <div className="bg-white rounded-lg shadow-lg p-3 mb-3 grid gap-3">
        <h2>{title}</h2>
        {children}
    </div>
);
