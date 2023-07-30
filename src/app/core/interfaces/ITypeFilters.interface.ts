export interface ITypeFilters {
    name?: string;
    type?: string;
    status?: status;
    gender?: gender;
}

type gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

type status = 'Dead' | 'Alive' | 'unknown';

export type typeFields = 'name' | 'type' | 'status' | 'gender';