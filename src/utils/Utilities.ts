export default class Utilities {
    private constructor() {}

    private static evaluateCondition(condition: any, data: any): boolean {
        const fieldValue = data[condition.field];

        switch (condition.operator) {
            case "===":
                return fieldValue === condition.value;
            case "!==":
                return fieldValue !== condition.value;
            case ">":
                return fieldValue > condition.value;
            case "<":
                return fieldValue < condition.value;
            case ">=":
                return fieldValue >= condition.value;
            case "<=":
                return fieldValue <= condition.value;
        
            default:
                return false;
        }
    }

    public static evaluateConditions(conditions: any, data: any): boolean {
        return conditions.some((condition: any) => {
            if (condition.type === 'and') {
                return condition.conditions.every((subCondition: any) => {
                    if(subCondition.conditions) {
                        return Utilities.evaluateConditions([subCondition], data);
                    } else {
                        return Utilities.evaluateCondition(subCondition, data);
                    }
                });
            } else if (condition.type === 'or') {
                return condition.conditions.some((subCondition: any) => {
                    if(subCondition.conditions) {
                        return Utilities.evaluateConditions([subCondition], data);
                    } else {
                        return Utilities.evaluateCondition(subCondition, data);
                    }
                });
            }
            return false;
        });
    }
}