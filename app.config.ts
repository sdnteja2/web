export default defineAppConfig({
  ui: {
    primary: 'merah',
    gray: 'slate',
    container: {
      base: 'mx-auto',
      padding: 'px-4 sm:px-16 lg:px-16',
      constrained: 'max-w-7xl',
    },
    card: {
      base: 'relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800  flex-1 flex flex-col shadow hover:ring-primary-500 dark:hover:ring-primary-400 transition-all duration-500',
      background: 'bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity] ',
      divide: 'divide-y divide-gray-200  dark:divide-gray-800',
      ring: '',
      rounded: 'rounded-lg',
      shadow: 'shadow',
      body: {
        base: 'flex-1 flex flex-col overflow-hidden gap-x-8 gap-y-4 ',
        background: '',
        padding: 'p-3  sm:p-4',
      },
      header: {
        base: '',
        background: '',
        padding: 'px-4 py-4 sm:px-6',
      },
      footer: {
        base: '',
        background: '',
        padding: 'px-4 py-4 sm:px-6',
      },
    },

    tabs: {
      wrapper: 'relative space-y-2',
      container: 'relative w-full',
      base: 'focus:outline-none',
      list: {
        base: 'relative ',
        background: 'bg-gray-100 dark:bg-gray-900',
        rounded: 'rounded-md',
        shadow: 'md',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-merah dark:bg-merah',
          rounded: 'rounded-md',
          shadow: 'shadow-sm',
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-gray-900 dark:text-white',
          inactive: 'text-gray-500 dark:text-gray-400',
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: '',
        },
      },
    },

    badge:
    {
      base: 'inline-flex items-center',
      rounded: 'rounded',
      font: 'font-medium',
      size: {
        xs: 'text-xs px-1.5 py-0.5',
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-2 py-1',
        lg: 'text-sm px-2.5 py-1.5',
      },
      color: {
        white: {
          solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900',
        },
        gray: {
          solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800',
        },
        black: {
          solid: 'text-white dark:text-gray-900 bg-gray-900 dark:bg-white',
        },
      },
      variant: {
        solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
        outline: 'text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400',
        soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
        subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
      },
      default: {
        size: 'sm',
        variant: 'solid',
        color: 'primary',
      },
    },

  },
})
