import React from 'react';
import { Input } from '../ui/input';

type Props = {
  id?: string;
  title: string;
  className?: string;
  error?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Inputform = React.forwardRef<HTMLInputElement, Props>(({ error, id, title, className = '', ...props }, ref) => {
  return (
    <div className={`${className} space-y-1 **:w-full`}>
      <label className="space-y-1 text-[0.9rem] font-medium select-none" htmlFor={id}>
        <p>{title}</p>
        <Input autoComplete="off" id={id} ref={ref} {...props} />
      </label>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

Inputform.displayName = 'Inputform';

export { Inputform };
