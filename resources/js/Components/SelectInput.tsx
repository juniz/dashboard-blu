import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  SelectHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
  {
    className = "",
    isFocused = false,
    ...props
  }: SelectHTMLAttributes<HTMLSelectElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  return (
    <select
      {...props}
      className={
        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
        className
      }
      ref={localRef}
    >
      {props.children}
    </select>
  );
});
