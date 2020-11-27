const l = (tag: string, props: Record<string, string> = {}, children: string[] | string = []) => {
  const propsToUse = Object.keys(props).filter((prop) => prop !== 'className');
  let final = `<${tag}${propsToUse.map((prop) => ` ${prop}='${props[prop]}'`).join('')}`;
  if (props.className) final = `${final} class='${props.className}'`;
  final = `${final}>${typeof children === 'string' ? children : children.join('')}</${tag}>`;
  return final;
};

export { l };
