# date_formatt.js

## Overview
Convert date object to formatted string easily .

## Usage

Load date_format.js .

```html
<script type="text/javascript" src="src/date_format.js"></script>
```

Create date object then use getFormattedDate method with format string .

```html
<script type="text/javascript">
  // Create date object . 
  const date = new Date();
  // Use getFormattedDate method
  const dateString = date.getFormattedDate("yyyy/MM/dd HH:mm:ss");

  console.log(dateString); // ex 2019/05/01 09:01:01
</script>
```