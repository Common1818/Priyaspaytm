import axios from 'axios';

export const redirectToPaytm = (details, orderId, userId) => async (
   dispatch
) => {
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   const body = { ...details };
   try {
      const res = await axios.post(
         `/api/payment/${userId}/${orderId}`,
         body,
         config
      );
      console.log(res);
      /********************************************************************************************************** */
      function isDate(val) {
         return Object.prototype.toString.call(val) === '[object Date]';
      }
      function isObj(val) {
         return typeof val === 'object';
      }
      function stringifyValue(val) {
         if (isObj(val) && !isDate(val)) {
            return JSON.stringify(val);
         } else {
            return val;
         }
      }
      function buildForm({ action, params }) {
         const form = document.createElement('form');
         form.setAttribute('method', 'post');
         form.setAttribute('action', action);
         Object.keys(params).forEach((key) => {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', stringifyValue(params[key]));
            form.appendChild(input);
         });
         return form;
      }
      function post(details) {
         const form = buildForm(details);
         console.log(form);
         document.body.appendChild(form);
         form.submit();
         form.remove();
      }
      /********************************************************************************************************** */
      const processParams = res.data;
      const details = {
         action: `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=ctygRR14184822145812&orderId=${orderId}&name="paytm"`,
         params: processParams,
      };
      await post(details);
   } catch (err) {
      console.log(err);
   }
};
