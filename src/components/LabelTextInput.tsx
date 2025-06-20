interface LabelTextInputProps {
    name: string;
    labelText: string;
    inputText: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabelTextInput = ({
    name,
    labelText,
    inputText,
    value,
    onChange,
}: LabelTextInputProps) => (
    <div>
        <label className="block text-sm font-medium text-gray-600 mb-3">
            {labelText}
            <input
                type="text"
                name={name}
                value={value}
                placeholder={inputText}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            />
        </label>
    </div>
);
