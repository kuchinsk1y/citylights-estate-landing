'use client';

import Image from 'next/image';
import { useId, type FormEvent } from 'react';
import { apartmentOptions } from '@/data/content';
import { Button } from '@/components/ui/Button';

const labelStyles = 'text-sm font-semibold uppercase leading-[17px] text-gold';
const fieldStyles =
  'w-full border-0 border-b border-gold/50 bg-transparent pb-3 pt-2 text-base text-white outline-none transition-colors duration-300 placeholder:text-white focus:border-gold';

export function SearchForm() {
  const id = useId();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Search apartments"
      className="border-gold bg-ink/40 grid gap-x-[25px] gap-y-6 rounded-[10px] border p-6 shadow-[-10px_10px_20px_rgb(45_45_45/0.05)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-end lg:px-[95px] lg:py-[41px]"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor={`${id}-price`} className={labelStyles}>
          Price US Dollar
        </label>
        <input
          id={`${id}-price`}
          name="price"
          inputMode="numeric"
          placeholder="120000"
          className={fieldStyles}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor={`${id}-state`} className={labelStyles}>
          State
        </label>
        <input
          id={`${id}-state`}
          name="state"
          placeholder="Enter here"
          className={`${fieldStyles} placeholder:text-white/80`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor={`${id}-city`} className={labelStyles}>
          City
        </label>
        <input
          id={`${id}-city`}
          name="city"
          placeholder="Enter here"
          className={`${fieldStyles} placeholder:text-white/80`}
        />
      </div>

      <div className="relative flex flex-col gap-3">
        <label htmlFor={`${id}-type`} className={labelStyles}>
          Apartment
        </label>
        <select
          id={`${id}-type`}
          name="type"
          defaultValue={apartmentOptions[0]}
          className={`${fieldStyles} cursor-pointer appearance-none pr-8`}
        >
          {apartmentOptions.map((option) => (
            <option key={option} value={option} className="bg-ink text-white">
              {option}
            </option>
          ))}
        </select>
        <Image
          src="/icons/chevron.svg"
          alt=""
          width={15}
          height={8}
          className="pointer-events-none absolute right-1 bottom-[18px] h-auto w-[15px] rotate-90"
        />
      </div>

      <Button type="submit" className="w-full sm:col-span-2 lg:col-span-1 lg:w-[255px]">
        Search
      </Button>
    </form>
  );
}
