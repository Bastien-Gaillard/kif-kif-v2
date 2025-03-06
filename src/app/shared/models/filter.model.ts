export namespace Filter {
  export interface FilterOption {
    label: string; // Label de l'option
    value: string | number | boolean; // Valeur de l'option
  }

  export interface FilterConfig {
    key: string; // Clé utilisée dans `filterData` (ex: 'category', 'distance')
    label: string; // Label affiché pour l'utilisateur
    type: 'select' | 'range' | 'toggle'; // Type de filtre (select, range, toggle)
    placeholder?: string; // Placeholder pour les champs de type select
    options?: FilterOption[]; // Options disponibles pour les champs de type select
    min?: number; // Valeur minimale (pour range)
    max?: number; // Valeur maximale (pour range)
    step?: number; // Incrémentation (pour range)
    unit?: string; // Unité de mesure (pour range)
    defaultValues?: number[]; // Valeur par défaut (pour range)
  }

  export interface FilterParams {
    [key: string]: string | number | boolean;
  }
}
