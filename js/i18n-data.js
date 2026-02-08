// 统一管理全站翻译
const i18nData = {
            zh: {
				
				//heic-to-jpg-guide
				
				  "post_heic_combine_title": "🛠️ 配合这些工具，效率翻倍",
				  "post_heic_tool_compress": "图片压缩 (Image Compressor)",
				  "post_heic_tool_compress_desc": "转换完成后，立即本地压缩 JPG 体积。",
				  "post_heic_tool_webp": "WebP 转换器",
				  "post_heic_tool_webp_desc": "同样支持本地将 WebP 格式转换为 JPG。",
					"posthrictojpg": "HEIC 转 JPG：高保真，零上传。",
				  "cat_image": "影像技巧",
				  "post_heic_title": "如何批量将 HEIC 转换为 JPG：2026 终极隐私保护指南",
				  "post_heic_intro": "HEIC (High Efficiency Image Format) 是由 MPEG 组织开发的图像格式，自 iOS 11 起成为 iPhone 的标准。虽然它在画质与体积的平衡上表现卓越，但在 Windows 系统或办公软件中却经常遭遇“无法打开”的尴尬。更重要的是，普通在线转换工具往往会窃取您的照片隐私。本文将教您如何利用 SwiftConvert 的本地 WebAssembly 技术，在毫秒内完成安全转换。",
				  "post_heic_h1": "深度对比：HEIC 与 JPG 的本质区别",
				  "post_heic_p1": "HEIC 采用了更高效的 HEVC (H.265) 压缩算法。相比 30 年前诞生的 JPG 格式，它支持高达 16 位的深度色彩。然而，这种复杂性导致其在跨平台传输时极度依赖特定的解码器。通过 SwiftConvert 转换，我们是在本地进行高保真重解码，确保 100% 的兼容性。",
				  "post_heic_h2": "为什么选择“本地处理”而非“在线云转换”？",
				  "post_heic_p2": "当您在搜索框输入“HEIC 转换”时，大多数结果是云端工具。这些工具隐藏着巨大的隐私隐患：您的每张照片都包含 EXIF 信息（地理位置、拍摄日期、相机型号）。上传到服务器意味着您失去了对这些数据的控制。SwiftConvert 让您的浏览器直接执行转换逻辑，数据留在内存，不产生任何上传流量。",
				  "post_heic_accent_title": "SwiftConvert 核心优势：100% 离线处理",
				  "post_heic_p3_extra": "我们的工具完全利用您浏览器的内部算力处理图像。您的照片始终保留在您的电脑上，这使其成为目前最快、最安全的文件处理方式。",
				  "post_heic_step_guide_title": "HEIC 批量转换分步指南",
				  "post_heic_step1_t": "第一步：访问 SwiftConvert 核心工具箱",
				  "post_heic_step1_d": "在首页选择“HEIC to JPG”选项。由于采用本地处理方案，页面加载和功能响应几乎是瞬时的。",
				  "post_heic_step2_t": "第二步：利用多核批量处理功能",
				  "post_heic_step2_d": "您可以一次性拖入数十张照片。SwiftConvert 能够调用您 CPU 的多核性能，在多核处理器上体验并行转换带来的极致速度。",
				  "post_heic_step3_t": "第三步：结合其他工具实现流畅工作流",
				  "post_heic_step3_d": "转换完成后，您可以直接配合使用“图片压缩”或“调整尺寸”功能。所有操作都在同一个安全沙盒内完成，无需重复上传下载。",
				  "post_heic_h4": "技术背后的黑科技：WebAssembly 赋能",
				  "post_heic_p4": "我们之所以能在浏览器中实现原生级别的转换效率，是因为底层集成了 C++ 解码库并编译为 WebAssembly。这种“去中心化”的处理方式不仅更快，也更符合未来互联网对隐私保护的严苛要求。",
				  "post_heic_cta": "准备好体验安全转换了吗？",
				  "post_heic_cta_desc": "不需要注册，不需要上传。立即使用 SwiftConvert 的本地工具处理您的图片。",
				  "post_heic_cta_text": "前往转换器",
				
				  
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				//blog/privacy-local
				
				  "post_privacy_meta_title": "深度解析：为什么浏览器本地处理技术是保护隐私的最佳方案？ | SwiftConvert",
				  "post_privacy_title": "为什么“本地处理”技术是保护隐私的最佳方案？",
				  "post_privacy_intro": "在数字化协作日益频繁的今天，我们每天都在处理大量的 PDF 文档、个人照片和机密文件。然而，一个被大多数用户忽视的隐患是：当你点击“上传”按钮时，你的隐私权就已经处于真空状态。SwiftConvert 致力于通过‘本地处理’技术重塑在线工具的安全标准。",
				  
				  "post_privacy_h1": "技术深挖：传统云端处理的潜在风险",
				  "post_privacy_p1": "传统的在线转换器（Cloud-based Converters）依赖于服务器端的计算。这意味着你的文件必须跨越公共网络，进入服务商的私有服务器。在这个过程中，你面临着三重风险：",
				  "post_privacy_li1_1": "<strong>数据驻留风险：</strong> 即使服务商宣称‘处理后立即删除’，文件在缓存或备份服务器中可能存留数小时甚至数天。",
				  "post_privacy_li1_2": "<strong>传输拦截风险：</strong> 尽管有 HTTPS 加密，但在复杂的网络环境下，中间人攻击（MITM）依然可能威胁到大文件的安全。",
				  "post_privacy_li1_3": "<strong>服务商信誉风险：</strong> 如果服务商的后台被黑客入侵，存储在临时文件夹中的所有用户敏感数据都将成为攻击者的猎物。",
				
				  "post_privacy_h2": "什么是浏览器本地处理 (WebAssembly)？",
				  "post_privacy_p2": "SwiftConvert 采用了前沿的 WebAssembly (Wasm) 技术。简单来说，我们将原本需要安装在电脑上的复杂算法，封装成了可以在浏览器内运行的轻量级模块。当你将文件拖入网页时：",
				  "post_privacy_p2_extra": "处理逻辑在你的内存（RAM）中直接运行，而不是将数据推送到云端。你的浏览器变成了一个临时的、隔离的沙盒。由于没有数据上行到服务器，这种方式在物理层面上杜绝了数据泄露的可能性。",
				
				  "post_privacy_h3": "本地处理的四大核心优势",
				  "post_privacy_li3_1": "<strong>1. 100% 的私密性：</strong> 处理过程中，网络面板显示‘零上传’。这是处理法律合同、医疗报告和敏感图像的唯一安全方式。",
				  "post_privacy_li3_2": "<strong>2. 极致的性能表现：</strong> 传统的云转换受限于你的上行带宽。而本地处理直接利用你电脑 CPU 的多核性能，处理大型 HEIC 或 WebP 图片的速度通常比云端快 3-5 倍。",
				  "post_privacy_li3_3": "<strong>3. 节省流量成本：</strong> 无需重复上传和下载动辄几十 MB 的文件，对于移动办公用户来说，这极大节省了流量消耗。",
				  "post_privacy_li3_4": "<strong>4. 离线工作的能力：</strong> 即使在信号不佳的机舱或地下室，只要页面已经加载，转换功能依然可以完美运行。",
				
				  "post_privacy_h4": "行业观察：隐私权不应是昂贵的附加选项",
				  "post_privacy_p4": "很多付费软件要求用户购买高额订阅才能获得离线处理功能。我们认为，安全和隐私应该是每一位用户的基本权利。通过 SwiftConvert，我们证明了即使是免费工具，也可以通过技术创新（如本地 JS 库和 Wasm）来实现最高级别的合规性。",
				
				  "post_privacy_quote": "“数据就像财富，最好的保存方式不是把它交给别人保管，而是锁在自己手里。本地处理技术就是那把唯一的钥匙。”",
				  "post_cta_title": "体验真正安全的转换工具",
				  "post_cta_desc": "不需要注册，不需要上传。立即使用 SwiftConvert 的本地工具处理您的图片和 PDF。",
				  "author_role": "网络安全架构师",
				  "privacy-localStart": "开始吧！",
				  "privacy-localp1": "您的文件从未离开您的设备。",
				
				
				//blog
				  "blog_hero_title": "使用指南与技术博文",
				  "blog_hero_subtitle": "探索关于图像转换、PDF 处理及数据隐私的专业指南。",
				  "cat_image": "图片技巧",
				  "cat_privacy": "隐私安全",
				  "read_more": "阅读更多",
				  "post1_title": "如何批量将 HEIC 转换为 JPG",
				  "post1_excerpt": "iPhone 照片格式不兼容？本文教你如何利用本地技术快速转换且不损失画质...",
				  "post2_title": "为什么“本地处理”更安全",
				  "post2_excerpt": "停止将敏感文件上传到云端。了解浏览器端处理如何保护您的 100% 私隐...",
				
				
				//导航部分翻译
				nav_home: '首页',nav_editor: '图片编辑',
				nav_converter: '图片转换', document_converter: 'PDF 工具', nav_about: '关于我们', nav_private: '100% 本地隐私',
				nav_language: '语言',nav_blog: "使用指南",
				nav_image_tools: '图片工具', nav_heictojpg: 'HEIC转JPG', nav_webptojpg: 'WebP转JPG', 
				nav_editor : '编辑图片',nav_pdftool: 'PDF工具', nav_mergepdf: '合并PDF', nav_splitpdf:'拆分PDF',
				nav_imagepdf: '图片转PDF',
				
				//底部部分翻译
				footer_desc: '免费、快速且私密的转换工具。所有处理均在您的浏览器本地完成。',
				footer_converter: '转换类',
				footer_tool: '工具类',
				footer_privacy: '隐私政策',
				footer_terms: '服务条款',
				footer_contact: '联系我们',
				footer_HeicTojpg: 'HEIC 转 JPG',
				footer_WebpTojpg: 'Webp 转 JPG',
				footer_ImagetoPDF: 'Image 转 PDF',
				footer_Merge: '合并PDF',
				footer_resize: '修改图片尺寸',
				footer_compress: '压缩图片',
				footer_company: '关于',
				
				//index页面其他
				section_why_title: '为什么选择 SwiftConvert?',
				section_why_desc: '大多数在线转换器要求您将文件上传到他们的服务器，这存在巨大的隐私泄露风险。SwiftConvert 通过 100% 浏览器本地处理技术改变了这一现状。',     
				feature_1_title: '🔒 100% 隐私保护',
				feature_1_desc: '您的图片和 PDF 永远不会离开您的电脑。所有转换都在您的浏览器内存中完成，刷新页面即刻清除。',
				feature_2_title: '⚡ 零等待速度',
				feature_2_desc: '由于不需要上传大文件（如 HEIC 照片或超大 PDF），处理几乎是瞬间完成的。不再受限于您的网络上传带宽。',
				feature_3_title: '🌐 支持离线使用',
				feature_3_desc: '页面加载完成后，即使断开网络连接，您依然可以正常使用所有转换和编辑功能。',
				faq_q1: 'SwiftConvert 使用安全吗？',
				faq_a1: '非常安全。我们使用 WebAssembly 和现代 JavaScript 技术将转换逻辑运行在您的浏览器沙盒中。我们没有后端服务器来存储您的任何文件。',  
				faq_q2: '你们会限制文件大小吗？',
				faq_a2: '我们不设限制。只要您的电脑内存（RAM）足够大，您可以处理任意大小的文件。',
				faq_q3: '可以离线使用吗？',
				faq_a3: '是的。一旦页面加载完成，即使你拔掉网线，图片转换和 PDF 处理功能依然可以正常工作。',
				table_title: '技术规格与隐私对比',
				        table_header_features: '功能特性',
				        table_header_swift: 'SwiftConvert (本地)',
				        table_header_others: '传统在线工具',
				        table_row_privacy: '隐私保护',
				        table_swift_privacy: '100% 本地处理 (安全)',
				        table_others_privacy: '上传至服务器 (风险)',
				        table_row_speed: '处理速度',
				        table_swift_speed: '极速 (实时完成)',
				        table_others_speed: '缓慢 (取决于上传速度)',
				        table_row_security: '数据安全',
				        table_swift_security: '零数据存储',
				        table_others_security: '保留 1-24 小时',
                hero_title: '免费隐私的 <br><span class="text-indigo-600">全能媒体工具箱</span>',
                hero_desc: "100% 浏览器本地处理，隐私、高效、免费。您的文件永远不会离开您的电脑。",
                lang_btn: "English",
                tool_heic_jpg: "HEIC 转 JPG", desc_heic_jpg: "将苹果手机照片转为通用 JPG。",
                tool_webp_jpg: "WebP 转 JPG", desc_webp_jpg: "将 WebP 图片转为标准 JPG 格式。",
                tool_img_pdf: "图片转 PDF", desc_img_pdf: "将多张图片一键合并为 PDF 文档。",
                task1_title: "图片修改尺寸", task1_desc: "精确调整图片的像素宽度和高度。",
                task2_title: "裁剪图片", task2_desc: "自由裁剪或按比例剪切图片内容。",
                task3_title: "旋转图片", task3_desc: "旋转角度或水平/垂直翻转图片。",
                task4_title: "图片压缩", task4_desc: "减小文件体积并保持高清画质。",
                tool_pdf_merge: "PDF 合并", desc_pdf_merge: "将多个 PDF 文件按顺序合并。",
                tool_pdf_split: "PDF 拆分", desc_pdf_split: "从 PDF 中提取特定页面或拆分。",
				//converter
				formats_supported_in: "支持的输入格式",
				        formats_supported_out: "转换为",
				        input_hint: "支持 JPG, PNG, WEBP, BMP, GIF, SVG, HEIC, AVIF",
				        ready_status: "待命",
				        done_status: "完成",
				        error_status: "失败",
				        processing_status: "处理中...",
						conv_title: '图片转换',
						conv_subtitle: '快速，本地和100%隐私保护',
						btn_start: '开始转换',
						faq_converter_q1: '使用 SwiftConvert 安全吗？',
						faq_converter_a1: '非常安全。所有处理均在您的浏览器本地完成，文件永远不会上传到服务器。',
						faq_converter_q2: '支持批量转换吗？',
						faq_converter_a2: '支持，您可以一次性选择多张图片并在本地完成批量转换。',
						
						//editor
						hero_title: '专业的图像 <br><span class="text-indigo-600">在线编辑工具</span>',
						hero_desc: '无需上传服务器，所有操作均在您的浏览器本地完成。隐私、高效、简单。',
						lang_btn: 'English',
						task1_title: '图片尺寸修改',
						task1_desc: '精确调整图片的像素宽度和高度，支持保持比例或自由拉伸。',
						task2_title: '图片精准剪切',
						task2_desc: '提供自由裁剪和固定比例剪切功能，快速构图，去除多余部分。',
						task3_title: '图片方向旋转',
						task3_desc: '一键实现 90° 顺时针或逆时针旋转，同时支持水平和垂直翻转。',
						task4_title: '智能图片压缩',
						task4_desc: '在保持视觉清晰度的前提下，大幅度减小图片文件体积，方便分享。',
						// FAQ 模块
						    faq_title: "常见问题",
						    faq_editor_q1: "在这里编辑照片安全吗？",
						    faq_editor_a1: "绝对安全。SwiftConvert 采用 100% 本地浏览器处理技术。您的照片在内存中处理，一旦关闭标签页，数据就会消失。文件永远不会上传到我们的服务器。",
						    faq_editor_q2: "图片处理后质量会变差吗？",
						    faq_editor_a2: "不会。我们的本地处理算法在确保隐私的同时，能最大限度保留原图画质。您可以根据需要手动调节压缩率和尺寸。",
						    faq_editor_q3: "支持哪些格式？",
						    faq_editor_a3: "我们支持 JPG, PNG等主流图片格式的本地编辑与保存。",
							//pdf-converter
							deep_pdf_title: '为什么选择 SwiftConvert 处理 PDF？100% 隐私与本地性能',
							deep_pdf_p1: 'PDF (Portable Document Format) 是全球通用的文档标准，但在合并、拆分或将图片转换为 PDF 时，大多数在线工具会要求您上传文件。SwiftConvert 改变了这一现状，我们利用先进的浏览器 WebAssembly 技术，将专业的 PDF 处理引擎直接运行在您的浏览器本地内存中。',
							deep_pdf_p2: '我们的“零上传”技术确保您的合同、发票和个人照片永远不会离开您的设备。当您进行 PDF 合并或图片转 PDF 操作时，所有的计算和合成都在本地 CPU 上完成。这不仅消除了服务器端数据泄露的风险，还绕过了因上传大文件而产生的速度限制。',
							deep_pdf_p3: 'SwiftConvert 致力于提供极简且高效的文档工作流。无论是在没有网络的环境下，还是处理高度机密的商务文档，您都可以信赖我们的本地 PDF 工具箱。我们不存储、不查看、也不收集您的任何文档数据，为您提供真正的数据主权。',
							card_heic: '合并 PDF', card_webp: '拆分 PDF', card_pdf: '图片转 PDF', card_offline: '100% 离线',
							merge_name: '合并 PDF', merge_desc: '将多个 PDF 文件合并为一个单份文档。', merge_btn: '选择 PDF 文件',
							split_name: 'PDF 拆分', split_desc: '提取页面或将 PDF 拆分为独立文件。', split_btn: '选择 PDF 文件',
							img_pdf_name: '图片转 PDF', img_pdf_desc: '将多张照片合并并转换为高品质 PDF。', img_pdf_btn: '上传图片',
							faq_title: '常见问题解答', faq_cat_privacy: '隐私与安全', faq_safety_title: '我的文件安全吗？', faq_safety_desc: '非常安全。所有处理 100% 在本地完成，不上传服务器。',
							faq_cat_limit: '文件限制', faq_limit_title: '有大小限制吗？', faq_limit_desc: '没有数量限制，仅取决于您设备的内存。',
							modal_confirm: '我知道了',

							faq_cat_multi: '工作流',
							        faq_multi_title: '我可以将 PDF 拆分为独立页面吗？',
							        faq_multi_desc: '可以。我们的拆分工具会提取每一页，并自动打包成一个 ZIP 压缩包供您一键下载。',
							        faq_cat_batch: '性能',
							        faq_batch_title: '一次可以合并多少个文件？',
							        faq_batch_desc: '技术上没有限制。只要您的浏览器内存足够，您可以一次性合并几十个 PDF 文件。',
									feat_pdf_local_title: '本地安全处理',
									        feat_pdf_local_desc: '您的 PDF 文档永远不会上传。所有的合并、拆分操作均在浏览器本地完成。',
									        feat_pdf_eff_title: '极致处理效率',
									        feat_pdf_eff_desc: '瞬间处理大型 PDF 文件。无论是合并几十份文档还是拆分页面，都能快速完成。',
									        feat_pdf_conv_title: '图片转 PDF',
									        feat_pdf_conv_desc: '支持将批量照片（JPG/PNG/WebP）一键转换为高品质的 PDF 文档。',
											about_content: `
											            <div class="space-y-4">
											                <div class="border-l-4 border-indigo-600 pl-4 py-1">
											                    <h4 class="text-slate-900 font-black  text-xs tracking-wider">本地化处理的革新</h4>
											                    <p class="text-slate-500 text-[10px] mt-1">速度与隐私的完美契合</p>
											                </div>
											                <p>SwiftConvert 是一款现代化的图像工具，旨在解决“安全与便捷”之间的矛盾。传统转换器需要将文件上传到云端服务器，这让您的私人照片面临泄露风险。</p>
											                <div class="grid grid-cols-2 gap-4 my-6">
											                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
											                        <span class="text-indigo-600 font-bold text-[10px] block mb-1 ">技术核心</span>
											                        <p class="text-[11px] leading-tight">基于 WebAssembly 技术，直接在您的浏览器内存中处理图片。</p>
											                    </div>
											                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
											                        <span class="text-emerald-600 font-bold text-[10px] block mb-1 ">隐私承诺</span>
											                        <p class="text-[11px] leading-tight">零服务器架构。您的数据永远不会离开您的个人设备。</p>
											                    </div>
											                </div>
											                <p>我们的使命是提供一个专业、免费且无广告的工具，在提升效率的同时，绝对尊重您的数据所有权。</p>
											            </div>`,
											privacy_content: '<section><h4 class="font-black text-slate-900  text-[11px] mb-2 tracking-wide">零上传政策</h4><p>我们绝不会查看或存储您的图片。所有转换过程 100% 在您浏览器的沙箱环境中本地完成。除了基本的数据分析，我们不使用 Cookie 或任何跟踪技术。</p></section>',
											terms_content: '<p>SwiftConvert 按“原样”免费提供个人使用。使用此工具即表示您同意您的文件仍为您个人所有，我们不对转换过程中产生的任何问题负责。</p>',
											contact_content: `
											            <div class="space-y-4">
											                <p>有任何问题或建议？欢迎随时联系我们。</p>
											                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
											                    <p class="font-black text-indigo-600  text-[10px] mb-1">邮件支持</p>
											                    <h class="text-slate-800 font-bold hover:text-indigo-600 transition-colors">yuerkang175@gmail.com</h>
											                </div>
											                <p class="text-[11px] italic">我们通常会在 24 小时内回复您的邮件。</p>
											            </div>
											        `,
													 
													        status_complete: '完成',
													       
													        // PDF 专属卡片文案
													        feat_pdf_local_title: '本地安全处理',
													        feat_pdf_local_desc: '您的 PDF 文档永远不会离开您的浏览器。',
													        feat_pdf_eff_title: '极致处理效率',
													        feat_pdf_eff_desc: '数秒内即可完成大型 PDF 的合并或拆分。',
													        feat_pdf_conv_title: '图片转 PDF',
													        feat_pdf_conv_desc: '支持批量将照片转换为高品质 PDF 文档。',
															queue_status: '处理队列',
															        status_merging: '正在合并 PDF...',
															        status_converting: '正在转换图片...',
															        status_splitting: '正在拆分页面...',
															        status_split_done: '拆分完成',
															        btn_download: '下载文件',
															        btn_error: '处理失败',
																	clear: '清空列表',
																	status_done: '完成',
																	faq_format_title: "图片转 PDF 支持什么格式？",
																	faq_format_desc: "我们支持 JPG、PNG、WebP、BMP 以及 GIF 格式。得益于本地浏览器处理技术，转换过程无需上传，极速且私密。",
						
				//关于部分
				contact_title: '联系我们',
				contact_desc: '对 SwiftConvert 有任何疑问？无论是关于技术问题还是功能建议，我们都非常期待您的反馈。',
				support_title: '官方支持',
				support_time: '我们的团队通常会在 24-48 小时内回复邮件。',
				why_1_t: '反馈错误',
				why_1_d: '报告关于本地转换引擎或浏览器兼容性的问题。',
				why_2_t: '功能建议',
				why_2_d: '告诉我们您希望在 SwiftConvert 上看到哪些新功能。',
				footer_privacy: '隐私政策',
				footer_terms: '服务条款',
				footer_contact: '联系我们',
				about_title: '强大处理，无需上传。',
				                    about_desc_1: 'SwiftConvert 的核心原则是：您的文件永远不应离开您的电脑。我们提供完全在浏览器本地运行的专业级工具。',
				                    about_why_1: '100%隐私保护',
									about_feature_1: '所有处理均在本地 CPU/GPU 完成，无任何隐私泄露风险。',
				                    about_why_2: '高速处理',
									about_feature_2: '无需等待上传下载，处理速度取决于您的硬件性能。',
				//compress
				feat_local_title: '本地处理',
				feat_local_desc: '您的图片永远不会离开您的电脑，100% 隐私保护。',
				feat_efficient_title: '极速转换',
				feat_efficient_desc: '利用本地算力，数秒内完成大批量格式转换。',
				feat_free_title: '免费使用',
				feat_free_desc: '我们承诺所有功能免费使用。',
				compress_title: "压缩图片", compress_desc: "在保持画质的同时减小体积，100% 本地处理。",
				drop_text: "点击或拖拽图片到此处", format_support: "支持 JPG, PNG，Webp格式",
				quality_label: "压缩质量", original_size: "原始大小",
				new_size: "压缩后 (预估)", download_btn: "下载图片",
				reset_btn: "重新上传",
				faq_compress_q1: "支持什么图片格式？",
				faq_compress_a1: "我们支持 JPG、PNG 和 WebP 格式。所有压缩过程均在本地完成，确保您的高清照片获得最高规格的隐私保护。",
				faq_compress_q2: "用到了什么技术？",
				faq_compress_a2: "SwiftConvert 采用浏览器原生的 Canvas API 进行智能重新编码。这使我们能够在不上传任何数据到服务器的情况下，大幅缩小文件体积。",
				faq_compress_q3: "是否支持批量压缩？",
				faq_compress_a3: "目前我们专注于单张图片的精确压缩，以确保最佳的画质与体积比。",
				//crop
				crop_title: "裁剪图片", crop_desc: "精确剪裁，在浏览器本地完成图片处理。",
				drop_text: "点击或拖拽图片到此处", format_support: "支持 JPG, PNG格式",
				rotate_left: "向左旋转", rotate_right: "向右旋转",
				flip_h: "水平翻转", flip_v: "垂直翻转",
				download_btn: "下载裁剪后的图片", reset_btn: "重新上传图片",
				faq_crop_q1: "在这里裁剪我的私密照片安全吗？",
				faq_crop_a1: "绝对安全。SwiftConvert 采用客户端技术，这意味着您的图片完全在浏览器中处理。它们永远不会被上传到任何服务器，100% 保护您的隐私。",
				faq_crop_q2: "我可以按照特定比例裁剪吗？",
				faq_crop_a2: "可以！我们的工具默认支持自由裁剪，您可以轻松拖动边角以匹配社交媒体尺寸或保持原始比例。我们还提供旋转和镜像翻转工具，让您全面掌控。",
				faq_crop_q3: "裁剪会降低图片的清晰度吗？",
				faq_crop_a3: "不会。我们默认使用高质量的 JPEG 编码（90% 质量）导出裁剪后的图片，确保您的照片在编辑后依然清晰锐利。",
				//resize
				resize_title: "修改图片尺寸", resize_desc: "100% 浏览器本地处理，不损画质。",
				drop_text: "点击或拖拽图片到此处", format_support: "支持 JPG, PNG，Webp格式",
				width_label: "宽度 (像素)", height_label: "高度 (像素)",
				keep_ratio: "保持纵横比", download_btn: "下载修改后的图片",
				reset_btn: "重新上传图片",
				faq_resize_q1: "调整尺寸会使我的图片拉伸或变形吗？",
				faq_resize_a1: "完全不会。我们默认开启了“保持宽高比”功能。这确保了当您更改宽度时，高度会自动调整，以保持图片的自然比例，不会产生任何变形。",
				faq_resize_q2: "我的照片会上传到服务器进行缩放吗？",
				faq_resize_a2: "不会。SwiftConvert 的所有处理均在您的浏览器本地完成。您的文件永远不会离开您的设备，是处理敏感文档或私密照片最安全的方式之一。",
				faq_resize_q3: "我可以设置精确的像素尺寸吗？",
				faq_resize_a3: "可以！您可以手动输入精确的像素宽度和高度。缩放完成后，我们使用高质量的 JPEG 编码导出图片，确保缩放后的照片依然清晰锐利。",
				//rotate
				rotate_title: "旋转图片", rotate_desc: "100% 本地处理，支持旋转与镜像翻转。",
				drop_text: "点击或拖拽图片到此处",
				format_support: "支持 JPG, PNG，Webp格式",
				rotate_left: "向左旋转 90°", rotate_right: "向右旋转 90°",
				flip_h: "水平翻转", flip_v: "垂直翻转",
				download_btn: "下载图片", reset_btn: "重新上传", 
				faq_rotate_q1: "旋转时图片尺寸会发生变化吗？",
				faq_rotate_a1: "当您向左或向右旋转 90° 时，图片的宽度和高度会互换。我们的智能画布会自动调整尺寸，确保整张照片完整显示，不会有任何部分被裁剪。",
				faq_rotate_q2: "水平翻转和垂直翻转有什么区别？",
				faq_rotate_a2: "水平翻转会产生“镜像”效果，左右对调，非常适合修复镜像自拍。垂直翻转则是将图片上下颠倒。您可以结合 90° 旋转来达到任何想要的方向。",
				faq_rotate_q3: "旋转处理过程安全吗？",
				faq_rotate_a3: "非常安全。所有的旋转和翻转操作都在浏览器的本地内存中完成，您的图片永远不会被发送到服务器。这不仅保证了 100% 的隐私，还无需消耗上传流量。"
				
				
            
			
			
			},
            en: {
				//heic-to-jpg-guide
				
				  "post_heic_combine_title": "🛠️ Combine with These Tools",
				  "post_heic_tool_compress": "Image Compressor",
				  "post_heic_tool_compress_desc": "Reduce JPG size instantly after conversion.",
				  "post_heic_tool_webp": "WebP Converter",
				  "post_heic_tool_webp_desc": "Convert modern WebP images to JPG locally.",
				
				"posthrictojpg": "HEIC to JPG: High Quality, Zero Uploads.",
				  "cat_image": "Image Tips",
				  "post_heic_title": "How to Batch Convert HEIC to JPG: The Ultimate Privacy-First Guide 2026",
				  "post_heic_intro": "HEIC (High Efficiency Image Format) has been the default standard for iPhone photos since iOS 11. While it excels at balancing quality with file size, it often triggers 'incompatible format' errors on Windows and legacy software. More importantly, common online converters often compromise your privacy. In this guide, you'll learn how to use SwiftConvert’s local WebAssembly technology to convert photos in milliseconds—safely and privately.",
				  "post_heic_h1": "Deep Dive: HEIC vs. JPG - What's the Real Difference?",
				  "post_heic_p1": "HEIC utilizes the advanced HEVC (H.265) compression algorithm. Compared to the 30-year-old JPG format, it supports up to 16-bit color depth. However, this complexity requires specific decoders that many platforms lack. SwiftConvert performs a local, high-fidelity re-decoding to ensure 100% compatibility across all your devices.",
				  "post_heic_h2": "Why Local Processing Beats Traditional Cloud Conversion",
				  "post_heic_p2": "When you search for 'HEIC converter,' most results are cloud-based tools. These pose a massive privacy risk: every photo contains EXIF metadata—GPS coordinates, precise timestamps, and camera settings. Uploading means losing control. SwiftConvert allows your browser to execute the logic directly in your RAM. Your data stays on your device, and zero bandwidth is wasted on uploads.",
				  "post_heic_accent_title": "The SwiftConvert Way: 100% Offline",
				  "post_heic_p3_extra": "Our tool uses your browser's internal power to process images. Your photos stay on your computer, making it the fastest and most secure method available today.",
				  "post_heic_step_guide_title": "Step-by-Step Guide to Batch Conversion",
				  "post_heic_step1_t": "Step 1: Access the SwiftConvert Local Toolkit",
				  "post_heic_step1_d": "Select the 'HEIC to JPG' tool on our homepage. You'll notice near-instant loading because there are no heavy backend API handshakes involved.",
				  "post_heic_step2_t": "Step 2: Utilize Multi-Core Batch Processing",
				  "post_heic_step2_d": "Drag and drop dozens of photos at once. SwiftConvert is optimized for multi-core CPUs, providing blazing-fast parallel processing.",
				  "post_heic_step3_t": "Step 3: Seamless Workflow with Built-in Tools",
				  "post_heic_step3_d": "After conversion, you can immediately use our Compressor or Resizer. Everything happens within the same secure browser sandbox—no secondary downloads needed.",
				  "post_heic_h4": "The Technology: Powered by WebAssembly (Wasm)",
				  "post_heic_p4": "Our efficiency comes from integrating high-performance C++ decoding libraries via WebAssembly. By moving computation from the 'Cloud' to your device, we provide a faster, safer, and more sustainable tool for everyone.",
				  "post_heic_cta": "Ready for a Secure Conversion?",
				  "post_heic_cta_desc": "No registration, no upload. Start processing your images with SwiftConvert today.",
				  "post_heic_cta_text": "Go to Converter",
				
				
				
				
				
				//blog/privacy-local
				  "post_privacy_meta_title": "In-depth: Why Browser-based Local Processing is the Ultimate for Privacy | SwiftConvert",
				  "post_privacy_title": "Why 'Local Processing' is the Best Solution for Privacy Protection",
				  "post_privacy_intro": "As digital collaboration increases, we handle countless PDFs, personal photos, and confidential files daily. However, a hidden risk ignored by most users is that the moment you click 'Upload', your privacy is in a vacuum. SwiftConvert aims to reshape online tool security through 'Local Processing'.",
				  
				  "post_privacy_h1": "The Risks of Traditional Cloud Processing",
				  "post_privacy_p1": "Traditional online converters rely on server-side computing. This means your files must cross the public internet to reach a provider's private server. This process involves three major risks:",
				  "post_privacy_li1_1": "<strong>Data Residency:</strong> Even if providers claim to 'delete after processing', files may linger in cache or backup servers for hours or days.",
				  "post_privacy_li1_2": "<strong>Interception:</strong> Despite HTTPS, Man-In-The-Middle (MITM) attacks can still threaten large file transfers in complex network environments.",
				  "post_privacy_li1_3": "<strong>Provider Integrity:</strong> If a provider's backend is breached, all temporary user data becomes a goldmine for hackers.",
				
				  "post_privacy_h2": "What is Browser Local Processing (WebAssembly)?",
				  "post_privacy_p2": "SwiftConvert uses cutting-edge WebAssembly (Wasm) technology. Simply put, we package complex algorithms into lightweight modules that run inside your browser. When you drag a file into our page:",
				  "post_privacy_p2_extra": "The processing logic runs directly in your memory (RAM), not on a remote cloud. Your browser becomes a temporary, isolated sandbox. Since no data is uploaded to a server, data leakage is physically impossible.",
				
				  "post_privacy_h3": "Four Core Advantages of Local Processing",
				  "post_privacy_li3_1": "<strong>1. 100% Privacy:</strong> Zero upload shown in the network panel. This is the only safe way to handle legal contracts and sensitive medical reports.",
				  "post_privacy_li3_2": "<strong>2. Performance:</strong> Cloud tools are limited by your upload speed. Local processing utilizes your CPU's multi-core power, making batch conversions of large HEIC files 3-5x faster.",
				  "post_privacy_li3_3": "<strong>3. Bandwidth Savings:</strong> No need to upload and re-download large files, which is a lifesave for mobile users with limited data.",
				  "post_privacy_li3_4": "<strong>4. Offline Availability:</strong> Once the page is loaded, the tools work perfectly even in airplane mode or areas with poor signal.",
				
				  "post_privacy_h4": "Industry Insight: Privacy Should Not Be a Premium Option",
				  "post_privacy_p4": "Many paid software suites require expensive subscriptions for offline features. We believe privacy is a fundamental right. SwiftConvert proves that free tools can achieve top-tier compliance through technical innovation like Wasm.",
				
				  "post_privacy_quote": "“Data is like wealth; the best way to keep it safe is not to hand it over to others, but to keep it in your own hands. Local processing is the only key.”",
				  "post_cta_title": "Experience Truly Secure Conversion",
				  "post_cta_desc": "No registration, no upload. Start processing your images and PDFs with SwiftConvert today.",
				  "author_role": "Cybersecurity Architect",
				  "privacy-localStart": "Get Started Now",
				  "privacy-localp1": "Your files never leave your device.",
				
				
				//blog
				  "blog_hero_title": "Guides & Resources",
				  "blog_hero_subtitle": "Explore professional guides on image conversion, PDF handling, and data privacy.",
				  "cat_image": "IMAGE TIPS",
				  "cat_privacy": "PRIVACY",
				  "read_more": "Read More",
				  "post1_title": "How to Batch Convert HEIC to JPG",
				  "post1_excerpt": "Incompatible iPhone photos? Discover the fastest way to convert HEIC files locally without quality loss...",
				  "post2_title": "Why Local Processing is Safer",
				  "post2_excerpt": "Stop uploading sensitive files to cloud servers. Learn how browser-based conversion keeps your data 100% private...",
				
				
				
				//导航部分翻译
				nav_home: 'Home',nav_editor: 'Image Editor',
				nav_converter: 'Image Converter', document_converter: 'PDF Tools', nav_about: 'About', nav_private: '100% Private',
				nav_language: 'Language',nav_blog: "Guides",
				nav_image_tools: 'Image Tools', nav_heictojpg: 'HEIC to JPG', nav_webptojpg: 'WebP to JPG', 
				nav_editor : 'Editor Image',nav_pdftool: 'PDF Tools', nav_mergepdf: 'Merge PDF', nav_splitpdf:'Split PDF',
				nav_imagepdf: 'Image to PDF',
				
				//底部部分翻译
				footer_desc: 'Free, fast, and private file conversion. All processing happens locally in your browser.',
				footer_converter: 'Converters',
				footer_tool: 'Tools',
				footer_company: 'Company',
				footer_privacy: 'Privacy Policy',
				footer_terms: 'Terms of Service',
				footer_contact: 'Contact Us',
				footer_HeicTojpg: 'HEIC to JPG',
				footer_WebpTojpg: 'Webp to JPG',
				footer_ImagetoPDF: 'Image to PDF',
				footer_Merge: 'Merge PDF',
				footer_resize: 'Resize Image',
				footer_compress: 'Compress Image',
				
				//index
				section_why_title: 'Why Choose SwiftConvert?',
				section_why_desc: 'Most online converters require you to upload files to their servers, posing significant privacy risks. SwiftConvert changes this with 100% local browser-based processing.',
				        
				feature_1_title: '🔒 100% Private & Secure',
				feature_1_desc: 'Your images and PDFs never leave your device. All conversions happen in your browser’s RAM and are wiped instantly when you close the tab.',
				        
				feature_2_title: '⚡ Instant Speed',
				feature_2_desc: 'No more waiting for big HEIC or PDF files to upload. Processing is near-instant because it uses your local CPU power, not your internet upload speed.',
				        
				feature_3_title: '🌐 Offline Ready',
				feature_3_desc: 'Once the page is loaded, you can keep using all conversion and editing tools even without an internet connection.',
				        
				faq_q1: 'Is it safe to use SwiftConvert.ink?',
				faq_a1: 'Absolutely. We use WebAssembly and modern JS to run conversion logic within your browser. Since we have no backend server, your data literally cannot be leaked from our side.',
				        
				faq_q2: 'Are there any file size limits?',
				faq_a2: 'No limits from us. As long as your device has enough RAM, you can process high-resolution images and large PDF documents locally.',
				
				faq_q3: 'Can I use it offline?',
				faq_a3: 'Yes. Once the page is fully loaded, all tools work perfectly even without an internet connection.',
				
				table_title: 'Technical & Privacy Comparison',
				        table_header_features: 'Features',
				        table_header_swift: 'SwiftConvert (Local)',
				        table_header_others: 'Other Online Tools',
				        table_row_privacy: 'Privacy',
				        table_swift_privacy: '100% Local (Safe)',
				        table_others_privacy: 'Server Upload (Risky)',
				        table_row_speed: 'Processing Speed',
				        table_swift_speed: 'Instant (Local)',
				        table_others_speed: 'Slow (Upload-dependent)',
				        table_row_security: 'Security',
				        table_swift_security: 'No Data Storage',
				        table_others_security: 'Stored for 1-24 hours',
				
				
				feat_local_title: 'Local Processing',
				feat_local_desc: 'Your images never leave your computer,100% Private',
				feat_efficient_title: 'High Efficiency',
				feat_efficient_desc: 'Batch convert HEIC/WebP in seconds.',
				feat_free_title: 'Free Usage',
				feat_free_desc: 'All features are, and will always be, free to use.',
				privacy: 'Privacy Policy',
				terms: 'Terms of Service',
				contact: 'Contact Us',
                hero_title: 'Free & Private <br><span class="text-indigo-600">Media Toolkit</span>',
                hero_desc: "100% local browser processing. Private, fast, and free. Your files never leave your device.",
                lang_btn: "中文",
                tool_heic_jpg: "HEIC to JPG", desc_heic_jpg: "Convert Apple HEIC photos to standard JPG.",
                tool_webp_jpg: "WebP to JPG", desc_webp_jpg: "Convert WebP images to compatible JPG.",
                tool_img_pdf: "Image to PDF", desc_img_pdf: "Combine images into a single PDF document.",
                task1_title: "Image Resize Image", task1_desc: "Adjust pixel dimensions (width/height) accurately.",
                task2_title: "Crop Image", task2_desc: "Crop images freely or with aspect ratios.",
                task3_title: "Rotate Photo", task3_desc: "Rotate 90° or flip images horizontally/vertically.",
                task4_title: "Compress Image", task4_desc: "Reduce file size without losing visual quality.",
                tool_pdf_merge: "Merge PDF", desc_pdf_merge: "Combine multiple PDF files together.",
                tool_pdf_split: "Split PDF", desc_pdf_split: "Extract pages or split a PDF file.",
				//converter
				formats_supported_in: "Supported Inputs",
				        formats_supported_out: "Convert To",
				        input_hint: "JPG, PNG, WEBP, BMP, GIF, SVG, HEIC, AVIF",
				        ready_status: "Ready",
				        done_status: "Done",
				        error_status: "Error",
				        processing_status: "Processing...",
						conv_title: 'Image <span class="text-indigo-600">Converter',
						conv_subtitle: 'Fast, local, and 100% private.',
						btn_start: 'Start Conversion',
						faq_converter_q1:'Is it safe to use SwiftConvert?',
						faq_converter_a1:'Yes. All processing is done locally in your browser. Files are never uploaded.',
						faq_converter_q2:'Does it support bulk conversion?',
						faq_converter_a2:'Yes, you can select multiple images and convert them all at once locally.',
						//editor
						hero_title: 'Professional Image <br><span class="text-indigo-600">Online Editor</span>',
						hero_desc: 'No server uploads. All operations are processed locally in your browser. Private, fast, and secure.',
						task1_title: 'Image Resizer',
						task1_desc: 'Accurately adjust pixel width and height, support aspect ratio locking.',
						task2_title: 'Image Cropper',
						task2_desc: 'Crop with custom or fixed ratios (16:9, 1:1) to recompose.',
						task3_title: 'Image Rotator',
						task3_desc: 'Rotate 90° clockwise/counter-clockwise and flip images.',
						task4_title: 'Image Optimizer',
						task4_desc: 'Significantly reduce file size while maintaining optimal quality.',
						faq_title: "Frequently Asked Questions",
						    faq_editor_q1: "Is it safe to edit my photos here?",
						    faq_editor_a1: "Absolutely. SwiftConvert uses 100% browser-based local processing. Your photos are processed in your RAM and vanish once the tab is closed. Your files are never uploaded to any server.",
						    faq_editor_q2: "Will the image quality decrease after processing?",
						    faq_editor_a2: "No. Our local processing algorithms are designed to preserve maximum quality while ensuring your privacy. You can also manually adjust compression and dimensions as needed.",
						    faq_editor_q3: "Which formats are supported?",
						    faq_editor_a3: "We support major image formats including JPG, PNG, WebP, and HEIC for local editing and saving.",
							//pdf-converter
							
							deep_pdf_title: 'Why Choose SwiftConvert for PDF? 100% Privacy & Local Performance',
							deep_pdf_p1: 'PDF (Portable Document Format) is the global standard for documents, but most online tools require you to upload files for merging, splitting, or converting images to PDF. SwiftConvert changes this by leveraging advanced WebAssembly technology to run a professional PDF processing engine directly within your browser\'s local memory.',
							deep_pdf_p2: 'By merging, splitting, or converting images to PDF locally, you bypass server wait times and upload limits. It is the fastest and most secure way to handle professional document workflows without any risk of data leakage.',
							deep_pdf_p3: 'Our tools are designed for security-conscious users. Whether you are working on a confidential project or simply want to save bandwidth, our "Zero-Upload" engine provides high-performance PDF synthesis entirely offline.',
							nav_converter: 'Image Converter', document_converter: 'PDF Tools', nav_about: 'About', nav_private: '100% Private',
							card_heic: 'Merge PDF', card_webp: 'Split PDF', card_pdf: 'Img to PDF', card_offline: '100% Offline',
							merge_name: 'Merge PDF', merge_desc: 'Combine multiple PDF files into one.', merge_btn: 'Select PDFs',
							split_name: 'Split PDF', split_desc: 'Extract pages from PDF file.', split_btn: 'Select PDF',
							img_pdf_name: 'Images to PDF', img_pdf_desc: 'Convert multiple photos into a PDF.', img_pdf_btn: 'Upload Images',
							faq_title: 'Frequently Asked Questions', faq_cat_privacy: 'Privacy & Safety', faq_safety_title: 'Are my PDF files safe?', faq_safety_desc: 'Yes. SwiftConvert processes PDFs 100% locally. Your files never touch any server.',
							faq_cat_limit: 'File Limits', faq_limit_title: 'Is there a limit?', faq_limit_desc: 'No count limits, restricted only by device memory.',
							modal_confirm: 'I Understand', privacy: 'Privacy Policy', terms: 'Terms of Service',
							about: 'About SwiftConvert',
							faq_cat_multi: 'Workflow',
							        faq_multi_title: 'Can I split a PDF into separate pages?',
							        faq_multi_desc: 'Yes. Our split tool extracts every page and packages them into a single ZIP file for easy download.',
							        faq_cat_batch: 'Performance',
							        faq_batch_title: 'How many files can I merge at once?',
							        faq_batch_desc: 'Technically unlimited. As long as your browser has enough memory, you can merge dozens of PDFs instantly.',
									feat_pdf_local_title: 'Local Processing',
									        feat_pdf_local_desc: 'Your PDF documents never touch our servers. All merging and splitting happens locally.',
									        feat_pdf_eff_title: 'High Efficiency',
									        feat_pdf_eff_desc: 'Instantly process large PDF files. Merge dozens of documents or split pages in a flash.',
									        feat_pdf_conv_title: 'Images to PDF',
									        feat_pdf_conv_desc: 'Convert batch photos (JPG/PNG/WebP) into a single, high-quality PDF document.',
											contact: 'Contact Us',
											about_content: `
												<div class="space-y-4">
													<div class="border-l-4 border-indigo-600 pl-4 py-1">
														<h4 class="text-slate-900 font-black  text-xs tracking-wider">The Local-First Revolution</h4>
														<p class="text-slate-500 text-xs mt-1">Speed meets absolute privacy.</p>
													</div>
													<p>SwiftConvert is a modern image utility designed to solve the dilemma of "Security vs. Convenience". Traditionally, converting HEIC or WebP required uploading files to a cloud server—exposing your private photos to potential risks.</p>
													<div class="grid grid-cols-2 gap-4 my-6">
														<div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
															<span class="text-indigo-600 font-bold text-[10px] block mb-1 ">Technology</span>
															<p class="text-[11px] leading-tight">Powered by WASM, processing images directly in your browser's RAM.</p>
														</div>
														<div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
															<span class="text-emerald-600 font-bold text-[10px] block mb-1 ">Privacy</span>
															<p class="text-[11px] leading-tight">Zero-Server Architecture. Your data never leaves your device.</p>
														</div>
													</div>
													<p>Our mission is to provide a professional-grade tool that is 100% free, without ads, and without compromise on your data sovereignty.</p>
												</div>`,
											privacy_content: '<section><h4 class="font-black text-slate-900  text-[11px] mb-2 tracking-wide">Zero Upload Policy</h4><p>We never see or store your images. All conversion processes happen 100% locally in your browser\'s sandbox. We do not use cookies or tracking beyond basic analytics.</p></section>',
											terms_content: '<p>SwiftConvert is provided "as is" for free personal use. By using this tool, you agree that your files remain your own property, and we are not responsible for any issues arising from image conversion.</p>',
											contact_content: `
											            <div class="space-y-4">
											                <p>Have questions or suggestions? We'd love to hear from you.</p>
											                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
											                    <p class="font-black text-indigo-600  text-[10px] mb-1">Email Support</p>
											                    <h class="text-slate-800 font-bold hover:text-indigo-600 transition-colors">yuerkang175@gmail.com</h>
											                </div>
											                <p class="text-[11px] italic">We typically respond within 24 hours.</p>
											            </div>
											        `,
											status_complete: 'Complete',
													        // PDF 专属卡片文案
													        feat_pdf_local_title: 'Local Security',
													        feat_pdf_local_desc: 'Your PDF documents never touch our servers.',
													        feat_pdf_eff_title: 'Fast Processing',
													        feat_pdf_eff_desc: 'Merge or split large PDFs in seconds.',
													        feat_pdf_conv_title: 'Images to PDF',
													        feat_pdf_conv_desc: 'Batch convert photos into a clean PDF.',
															queue_status: 'Processing Queue',
															        status_merging: 'Merging PDF...',
															        status_converting: 'Converting Images...',
															        status_splitting: 'Splitting PDF...',
															        status_split_done: 'Split Complete',
															        btn_download: 'Download',
															        btn_error: 'Error',
																	clear: 'Clear',
																	status_done: 'Complete',
																	faq_format_title: "What image formats are supported?",
																	faq_format_desc: "We support JPG, PNG, WebP, BMP, and GIF. Thanks to local browser processing, your images are converted instantly without being uploaded.",
												//关于部分
												contact_title: 'Contact Us',
												    contact_desc: 'Have questions about SwiftConvert? Whether it is a technical issue or a feature suggestion, we are here to help.',
												    support_title: 'Direct Support',
												    support_time: 'Our team typically responds within 24-48 hours.',
												    why_1_t: 'Report a Bug',
												    why_1_d: 'Report issues regarding local conversion or browser compatibility.',
												    why_2_t: 'Feature Suggestions',
												    why_2_d: 'Tell us what tools you want to see next on SwiftConvert.',
												    footer_privacy: 'Privacy Policy',
												    footer_terms: 'Terms of Service',
												    footer_contact: 'Contact Us',
													
													about_title: 'Pure Power. Zero Uploads.',
													                    about_desc_1: 'SwiftConvert was built on a simple principle: your files should never leave your computer. We provide professional-grade media tools that run entirely in your browser.',
													                    about_why_1: '100% Private',
																		about_feature_1: 'Processing happens on your local CPU/GPU. Zero risk of data breaches.',
													                    about_why_2: 'High Speed',
																		about_feature_2: 'Skip the upload wait. Convert and edit at the speed of your hardware.',
													//compress页面
													//本页
													feat_local_title: 'Local Processing',
													feat_local_desc: 'Your images never leave your computer,100% Private',
													feat_efficient_title: 'High Efficiency',
													feat_efficient_desc: 'Batch convert HEIC/WebP in seconds.',
													feat_free_title: 'Free Usage',
													feat_free_desc: 'All features are, and will always be, free to use.',
													
													
													
													compress_title: "Compress Image", compress_desc: "Reduce file size while keeping best quality locally.",
													drop_text: "Click or Drop Image Here", format_support: "Supports JPG, PNG，Webp",
													quality_label: "Compression Quality", original_size: "Original",
													new_size: "Compressed (Est.)", download_btn: "Download Image",
													reset_btn: "Upload Another",
													faq_compress_q1: "What image formats are supported?",
													faq_compress_a1: "We support JPG, PNG, and WebP. All processing happens locally, ensuring your high-resolution photos are handled with maximum privacy.",
													faq_compress_q2: "What technology is used for compression?",
													faq_compress_a2: "SwiftConvert uses the browser's native Canvas API for smart re-encoding. This allows us to reduce file size significantly without needing to upload your data to any server.",
													faq_compress_q3: "Does it support batch compression?",
													faq_compress_a3: "Currently, we focus on precision compression for single images to ensure the best quality-to-size ratio.",
					//crop
					crop_title: "Crop Image", crop_desc: "Precisely cut and reframe your photos locally.",
					drop_text: "Click or Drop Image Here", format_support: "Supports JPG, PNG",
					rotate_left: "Rotate Left", rotate_right: "Rotate Right",
					flip_h: "Flip Horiz.", flip_v: "Flip Vert.",
					download_btn: "Download Cropped Image", reset_btn: "Upload Another Image",
					faq_crop_q1: "Is it safe to crop my private photos here?",
					faq_crop_a1: "Absolutely. SwiftConvert uses client-side technology, meaning your images are processed entirely within your browser. They are never uploaded to any server, keeping your privacy 100% intact.",
					faq_crop_q2: "Can I crop to a specific aspect ratio?",
					faq_crop_a2: "Yes! Our tool allows for free-form cropping by default, but you can easily drag the corners to match common social media dimensions or keep your original proportions. We also provide rotate and flip tools for full control.",
					faq_crop_q3: "Will cropping reduce the quality of my image?",
					faq_crop_a3: "No. We export your cropped image using high-quality JPEG encoding (90% quality) by default, ensuring that your photos stay sharp and clear after the edit.",
					//resize
					resize_title: "Resize Image", resize_desc: "Adjust dimensions locally in your browser.",
					drop_text: "Click or Drop Image Here", format_support: "Supports JPG, PNG，Webp",
					width_label: "Width (px)", height_label: "Height (px)",
					keep_ratio: "Maintain Aspect Ratio", download_btn: "Download Resized Image",
					reset_btn: "Upload Another Image",
					faq_resize_q1: "Will resizing stretch or distort my image?",
					faq_resize_a1: "Not at all. By default, our 'Maintain Aspect Ratio' feature is enabled. This ensures that when you change the width, the height adjusts automatically to keep your image looking perfectly natural without any distortion.",
					faq_resize_q2: "Are my photos uploaded to a server for resizing?",
					faq_resize_a2: "No. SwiftConvert processes everything locally in your browser. Your files never leave your device, making it one of the most secure ways to resize sensitive documents or private photos.",
					faq_resize_q3: "Can I set the exact pixel dimensions?",
					faq_resize_a3: "Yes! You can manually enter the exact width and height in pixels. After resizing, we export the image using a high-quality JPEG encoder to ensure your resized photo remains crisp and clear.",
					//rotate
					rotate_title: "Rotate Image", rotate_desc: "Flip or rotate images locally in your browser.",
					drop_text: "Click or Drop Image Here",
					format_support: "Supports JPG, PNG，Webp",
					rotate_left: "Rotate -90°", rotate_right: "Rotate +90°",
					flip_h: "Flip Horizontal", flip_v: "Flip Vertical",
					download_btn: "Download Image", reset_btn: "Upload Another",
					faq_rotate_q1: "What happens to the image size when rotating?",
					faq_rotate_a1: "When you rotate 90° left or right, the width and height of your image will swap. Our smart canvas automatically adjusts its dimensions to ensure your entire photo remains visible without any parts being cut off.",
					faq_rotate_q2: "What is the difference between Horizontal and Vertical Flip?",
					faq_rotate_a2: "Horizontal Flip creates a 'mirror' effect, moving the left side to the right—perfect for fixing mirror-image selfies. Vertical Flip turns the image upside down. You can combine these with 90° rotations to achieve any orientation.",
					faq_rotate_q3: "Is the rotation processed securely?",
					faq_rotate_a3: "Yes. Since all rotations and flips are performed using your browser's local memory, your images are never sent to a server. This ensures 100% privacy and zero data usage for uploading files."
												
												
            }
        };

        
