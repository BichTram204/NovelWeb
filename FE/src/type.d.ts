declare module "react-helmet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dynamic = any;
type DynamicObject = Record<string, Dynamic>;

type OtpCode = string;
type DateTime = string;

// Functions
type AsyncVoidFunction = () => Promise<void>;
type SearchFunction = (query: string) => Promise<void>;

// Api Result
type ApiResultEmpty = DynamicObject;
