// Copyright (c) 2012 Web Notes Technologies Pvt Ltd (http://erpnext.com)
// 
// MIT License (MIT)
// 
// Permission is hereby granted, free of charge, to any person obtaining a 
// copy of this software and associated documentation files (the "Software"), 
// to deal in the Software without restriction, including without limitation 
// the rights to use, copy, modify, merge, publish, distribute, sublicense, 
// and/or sell copies of the Software, and to permit persons to whom the 
// Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in 
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
// OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// 

cur_frm.cscript.validate = function(doc, dt, dn) {
	return 1;
}

cur_frm.cscript['set_from_image'] = function(doc, dt, dn) {
	if(!doc.file_list) {
		msgprint('Please attach an image file first');
		return;
	}
	if(doc.content) {
		if(!confirm('Are you sure you want to overwrite the existing HTML?'))
			return;
	}

	var file_name = doc.file_list.split(',')[1]

	if(!in_list(['gif','jpg','jpeg','png'], file_name.split('.')[1].toLowerCase())) {
		msgprint("Please upload a web friendly (GIF, JPG or PNG) image file for the letter head");
		return;
	}

	img_link = '<div><img src="'+ wn.urllib.get_file_url(file_name) + '"/></div>'
	
	doc.content = img_link;
	refresh_field('content');
}
