
class L {
  private readonly tagName: string;
  private props: Record<string, string>;
  private children: Array<string> | string;

  /**
   * 
   * @param tag
   * @param props 
   * @param children 
   */
  constructor(readonly tag: string, props: Record<string, string> = {}, children: Array<string> | string = []) {
    this.tagName = tag
    this.props = props
    this.children = children

  }

  /**
   * Generate the html string
   */
  public create = (): string => {
    const propsToUse = this.ignoreObjectClassNames(this.props)

    let htmlContent: string = `<${this.tagName}${propsToUse.map((prop) => ` ${prop}='${this.props[prop]}'`).join('')}`;

    htmlContent = this.addObjectClassName(htmlContent, this.props)

    htmlContent = `${htmlContent}>${typeof this.children === 'string' ? this.children : this.children.join('')}</${this.tagName}>`;
    return htmlContent
  }

  private addObjectClassName(content: string, props: Record<string, string>) {
    if (props.className) {
      content = `${content} class='${props.className}'`
    }

    return content
  }


  private ignoreObjectClassNames(props: Record<string, string>) {
    return Object.keys(props).filter((prop) => prop !== 'className');
  }
}

/**
 * Creates an HTML string
 * @param tag
 * @param props
 * @param children
 * 
 * Examples
 * ```typescript
 * l("div", { id: "mydiv", className: "amazingNess" }, [
 *  l("button", { className: "btn btn--dark" }, "Click Me!"),
 *  l("p", { className: "text text--secondary" }, "Yeah do it!"),
 *  "No don't do it!"
 * ])
 * ```
 */


const l = (tag: string, props: Record<string, string> = {}, children: string[] | string = []) => {
  const propsToUse = Object.keys(props).filter((prop) => prop !== 'className');
  let final = `<${tag}${propsToUse.map((prop) => ` ${prop}='${props[prop]}'`).join('')}`;
  if (props.className) final = `${final} class='${props.className}'`;
  final = `${final}>${typeof children === 'string' ? children : children.join('')}</${tag}>`;
  return final;
};


export { l, L };
