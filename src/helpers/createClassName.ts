export const createClassName = (
  defClassName: string,
  className: string,
  condition: boolean,
) => {
  return condition ? defClassName + ' ' + className : defClassName;
};
