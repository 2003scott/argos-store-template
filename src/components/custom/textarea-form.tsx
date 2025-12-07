import React from 'react';
import { Textarea } from '../ui/textarea';

type Props = {
  title: string;
  placeholder: string;
  className?: string;
  error?: string | undefined;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaform = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ error, className = '', title, placeholder, ...props }, ref) => {
    return (
      <div className={`${className} w-full space-y-1`}>
        <label className="space-y-1 text-[0.9rem] font-medium select-none">
          <p>{title}</p>
          <Textarea {...props} ref={ref} placeholder={placeholder} />
        </label>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

TextAreaform.displayName = 'TextAreaform';

export { TextAreaform };
