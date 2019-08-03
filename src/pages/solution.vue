<template>
	<div id="solution">
		<div class="banner_Img"><img src="../../static/image/19e89ad7cea6219619b75381edf0934.jpg" /></div>
		<ul class="tap">
			<li :class="{ active: tap == 1 }" @click="tap = 1">农业溯源</li>
			<li :class="{ active: tap == 2 }" @click="tap = 2">酒水行业</li>
			<li :class="{ active: tap == 3 }" @click="tap = 3">金融安全</li>
			<li :class="{ active: tap == 4 }" @click="tap = 4">制造行业</li>
			<li :class="{ active: tap == 5 }" @click="tap = 5">零售行业</li>
			<li :class="{ active: tap == 6 }" @click="tap = 6">医疗行业</li>
		</ul>
		<div class="contentBox contentBox1" v-if="tap == 1">
			<div class="Content Content1">
				<div class="title">消费者、企业痛点</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">信息难公开、不透明</div>
						<div class="text">
							很多好的农产品销路不畅，有产品无市场，供需不平衡是由于在农业生产、流通、消费三大环节中，生产者和消费者过于分散、弱小，双方无法实现信息对称，无法透明价格。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">消费者不知情</div>
						<div class="text">
							不良商超以次充好，消费者不一定知道自己口中的食物是从哪里来的，到底是否安全健康。每年有十分之一的人因食源性疾病而患病，缺乏食品安全程序导致 40 万人死亡。
						</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">Name.OS农业溯源的价值</div>
				<div class="cont_data">
					<div class="cont">
						一物一码农产品质量追溯系统实现全程可追溯，使农产品生产、加工、运输、销售等所有环节的每一步都有记录，是保障农产品质量的最有效手段。实现食用农产品“从农田到餐桌”全过程追溯管理。
					</div>
					<img src="../../static/image/273897938745383a3316e5ba18cf3bd.png" />
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">Name.OS溯源优势</div>
				<div class="tips">可以从整体上给农户提供更加科学的种植决策理论依据。</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/4f36d032fe99243f6cb8a066e44b78d.png" />
						<div class="cont_title">种植/养殖信息管理</div>
						<div class="text">
							实时图像与视频监控，直观地反映了农作物生产的实时状态，引入视频图像与图像处理，既可直观反映一些作物的生长长势，也可以侧面反映出作物生长的整体状态及营养水平。
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/f29c7e9c4181b693d010746313b057f.png" />
						<div class="cont_title">加工信息管理</div>
						<div class="text">
							依次按各批次号进行全程追踪、信息采集，每个加工完的产品都会赋予相应批次号的二维码标签，通过描实二维码标签信息进行追溯，实现加工环节的信息追溯管理。
						</div>
					</div>
				</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/4f36d032fe99243f6cb8a066e44b78d.png" />
						<div class="cont_title">物流信息管理</div>
						<div class="text">
							通过GPS/GIS技术，对农产品运输全过程的状态、温度、路线进行全面的监控和管理，保证农产品的运输过程安全。追溯监控平台通过与车辆监控设备数据接口进行物流数据的采集，实现农产品配送信息的可追溯信息化管理。
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/f29c7e9c4181b693d010746313b057f.png" />
						<div class="cont_title">零售信息管理</div>
						<div class="text">
							通过各环节建立的种植、加工、物流等信息化管理，消费者在购买到农产品后，通过扫描农产品包装上的身份二维码可以追溯查询到所购买的农产品所有溯源信息，消费者可以买到放心的、健康的、有保证的绿色安全食品。
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：农业溯源
	            -->
		<div class="contentBox contentBox2" v-if="tap == 2">
			<div class="Content Content1">
				<div class="title">酒水防伪市场现状分析</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">假冒伪劣产品</div>
						<div class="text">
							酒类产品附加值高、销售量大、重复购买率高，因此成为假冒伪劣产品的重灾区，即使按照1%的假冒伪劣比例计算，每年因假冒伪劣产生的销售损失仍可达84.5亿元。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">防伪溯源不完善</div>
						<div class="text">
							随着科技的不断发展，防伪标签在酒类产品所占据的比重越来越大，没有防伪标签的酒都不属于正品，社会上假冒标签也层出不穷，因此企业更要不断完善防伪标签的防伪尺度。
						</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">酒类产品防伪溯源的价值</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/cc6215bccd51a23eacec777af26be93.png" />
						<div class="text">
							体现企业的正规化
							<br /> 让消费者买的放心，用的省心
							<br /> 给企业带来了更好的市场信誉
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/ee77ee6b833e311c5503477d986eb28.png" />
						<div class="text">
							消费者购买产品的同时
							<br /> 可以通过电话、网站、短信、微信等
							<br /> 方式查询真伪以消除消费者的后顾之忧。
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/dc5b7c1f433dde5032698e97c95d6e4.png" />
						<div class="text">
							通过防伪技术实现“一品一码”
							<br /> 使造假者因造假成本提高而无利可图
							<br /> 有效抵制造假者造假。
						</div>
					</div>
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">Name.OS解决方案</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/2f2048e7d1ffdb468209f81a35c3f1d.png" />
						<br /> 采用高精尖、无法复制的专业防伪溯源技术，消费者易使用、易鉴别 。
					</div>
					<div class="cont">
						<img src="../../static/image/169e1604d81e4c4cf5742f0d798176e.png" />
						<br /> 高科技纳米量子材料与二维码安全与识别加密技术实现结合获取酒品溯源信息。
					</div>
					<div class="cont">
						<img src="../../static/image/088546ebef0a77fe29912859dea1b78.png" />
						<br /> 通过会员、营销、数据分析、O2O商城、多种应用，增加消费者黏度，提升酒品销量。
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：酒水行业
	            -->
		<div class="contentBox contentBox3" v-if="tap == 3">
			<div class="Content Content1">
				<div class="title">金融防伪市场现状分析</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">同质化严重</div>
						<div class="text">
							伴随着国内金融行业数十年的发展，行业内同质化竞争日趋严重，都在积极探索新的运营形式和新的业务拓展，力图通过差异化竞争和多渠道的收入来源增强自身优势。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">整合数据难</div>
						<div class="text">
							金融企业业务系统繁多，这些业务系统有效地支撑着公司的业务开展，并且每天产生大量的数据。打通各业务系统之间的数据关联，整合内部数据和外部数据，成为了各个企业的难点。
						</div>
					</div>
				</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">获客成本高</div>
						<div class="text">
							高昂的获客成本一直是金融企业的老大难问题，然而，成本高的背后，却是较低的转化率和成交量。用户无法规模化增长，是影响金融企业发展最大的瓶颈。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">整合数据难</div>
						<div class="text">
							随在以P2P为代表的互联网金融企业呈爆发式增长的背景下，如何更精准的识别用户欺诈，如何构建更合理的信用等级，是当前金融企业急需考虑的问题。
						</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">Name.OS的价值</div>
				<div class="cont_data">
					<div class="text">
						可广泛应用于各种金融形态，传统金融、互联网金融、银行、证券等，一方面为各级业务人员提供统一高效的数据分析平台，另一方面为决策层提供实时的可视化数据展示，为业务创新和策略调整提供数据支撑。
					</div>
					<img src="../../static/image/860f37e3ee7499563d7a06ab850915b.png" />
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">酒类产品防伪溯源的价值</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/0cc90e0de0700c789e077ea2758f0b2.png" />
						<div class="cont_title">整合业务数据</div>
						<div class="cont_text">
							通过整合各业务系统数据
							<br /> 打通数据之间关联
							<br /> 解决金融企业信息孤岛困境
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/cee206df8ecaffab45089d34da70594.png" />
						<div class="cont_title">分析用户安全</div>
						<div class="cont_text">
							通过对客户的行为偏好的采集和分析
							<br /> 全面的反映客户的还款能力和还款意愿
							<br /> 增强识别欺诈客户的能力
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/aaf7c9d3c6983d99d3d430e82e51160.png" />
						<div class="cont_title">优化渠道推广</div>
						<div class="cont_text">
							同时定期追踪新用户的投资转化率
							<br /> 曝光衡量，分析推广效果
							<br /> 让企业依据数据优化渠道推广策略
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：金融安全
	            -->
		<div class="contentBox contentBox3" v-if="tap == 4">
			<div class="Content Content1">
				<div class="title">业务痛点</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">工业数据采集和分析</div>
						<div class="text">
							酒经过多年的技术积累，传统制造企业已经建立了众多业务管理和监控系统，而接下来的问题在于，如何打破这些信息系统之间的数据孤岛，从而整合数据资源并进行统一的分析处理。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">设备数据采集和分析</div>
						<div class="text">
							基于对设备运行情况、故障信息、质量检测等相关数据的采集和分析后，如何针对整个生产链条进行统一的可视化管控，真正实现“智能智造”，从而整合数据资源并进行统一的分析处理。
						</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">Name.OS的价值</div>
				<div class="cont_data">
					<div class="text">
						系统定制化实现自动化生产过程进行产品赋码、数据采集，仓储系统无缝对接，实现产品数字化管理，为企业降低了成本投入，增加产品的附加值，提升企业软实力，实现互联网企业转型，提供的智能数据可视化大屏解决方案，与企业原有自动控制系统相结合。
					</div>
					<img src="../../static/image/721f6d4929ca331eefdcda806178103.png" style="width: 400px;" />
				</div>
			</div>
			<div class="Content Content4">
				<div class="title">Name.OS解决方案</div>
				<div class="tips">通过虚拟展示业务流水线、设备运行情况、数据仪表盘等方式，有效提高产能、降低成本，释放工业设备数据潜能。</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/e3261dbbc387eba95f2181ccd53b734.svg" />
						<div class="cont_title">对接系统</div>
						<div class="cont_text">
							实时采集各系统数据
							<br /> 整合数据资源
							<br /> 从而便于进行统一分析处理
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/e3261dbbc387eba95f2181ccd53b7a1.svg" />
						<div class="cont_title">实时追踪</div>
						<div class="cont_text">
							配送情况、生产参数
							<br /> 质量信息等各环节生产数据
							<br /> 为生产和加工提供数据依据
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/e3261dbbc387eba95f2181ccd53b7a2.svg" />
						<div class="cont_title">监控设备</div>
						<div class="cont_text">
							针对故障作出及时的处理
							<br /> 对于租赁业务而言
							<br /> 通过对设备的提前预警和维护
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/e3261dbbc387eba95f2181ccd53b7a3.svg" />
						<div class="cont_title">数据监测</div>
						<div class="cont_text">
							监测各部件运行数据
							<br /> 如应力情况、超载使用情况等
							<br /> 保证企业的安全生产
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/e3261dbbc387eba95f2181ccd53b7a4.svg" />
						<div class="cont_title">提供身份码</div>
						<div class="cont_text">
							每一个产品提供唯一身份码
							<br /> 进行信息化管理
							<br /> 提供有效的平台监管
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：制造行业
	            -->
		<div class="contentBox contentBox3" v-if="tap == 5">
			<div class="Content Content1">
				<div class="title">行业痛点</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">业务系统繁多</div>
						<div class="text">业务系统繁多，数据无法打通。尽管收集的数据越来越详细，但由于各个业务系统相对独立，数据孤岛问题仍旧存在。</div>
					</div>
					<div class="cont">
						<div class="cont_title">真实运营情况</div>
						<div class="text">
							决策层无法实时了解业务运营情况。消费品企业的汇报流程往往是由管理层提出需求，确定需要查看的业务数据和报表类型，再由IT部门进行数据采集和清洗，当报表提交到管理层时，可能已经过了数天甚至数周。
						</div>
					</div>
				</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">数据分析</div>
						<div class="text">
							数据虽多分析太少。由于数据繁杂多样，决策者往往一次要看几十上百份报表，很难从这些报表中分析出相关问题。做什么决定，还得决策者自己思考。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">行业体量太多</div>
						<div class="text">
							消费品行业不仅体量大，产生的数据量也非常之大。特别是对于老牌企业而言，IT系统历经多年发展，产生了大量的业务数据，如财务数据、销售数据、商品数据、顾客数据、渠道数据等等。
						</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">Name.OS的价值</div>
				<div class="cont_data">
					<div class="text">
						Name.OS消费品行业解决方案可以帮助企业整合业务系统，
						<br /> 全面分析商品、销售、利润、市场等数据，
						<br /> 实时掌握促销、库存情况,真正实现数据驱动业务。
					</div>
					<img src="../../static/image/ccf0047b72d49120efe4dbf06688367.png" style="width: 300px;" />
				</div>
			</div>
			<div class="Content Content4">
				<div class="title">Name.OS解决方案</div>
				<div class="tips">可广泛应用于各种形态，一方面为各级业务人员提供统高效的数据分析平台，另一方面为决策层提供可视化数据，为业务创新和策略调整提供数据支撑。</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/ccf0047b72d49120efe4dbf066883a1.svg" />
						<div class="cont_title">业务系统</div>
						<div class="cont_text">
							如CRM、ERP、财务等
							<br /> 采集业务数据，优化数据
							<br /> 业务系统数据的整合
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/ccf0047b72d49120efe4dbf066883a2.svg" />
						<div class="cont_title">实时业务</div>
						<div class="cont_text">
							综合分析销售、利润、库存
							<br /> 铺货、产品、市场
							<br /> 用户等业务数据
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/ccf0047b72d49120efe4dbf066883a3.svg" />
						<div class="cont_title">定制权限</div>
						<div class="cont_text">
							定制化的权限管理
							<br /> 可随时随地查看数据
							<br /> 掌握运营情况
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/ccf0047b72d49120efe4dbf066883a4.svg" />
						<div class="cont_title">数据可视化</div>
						<div class="cont_text">
							包括电视、电脑
							<br /> 手机等多屏同步显示
							<br /> 方便企业管理者作出决策
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/ccf0047b72d49120efe4dbf066883a5.svg" />
						<div class="cont_title">经营状态</div>
						<div class="cont_text">
							可视化大屏，集中展示销售
							<br /> 市场、库存等核心指标
							<br /> 实时了解企业经营状态
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：零售行业
	            -->
		<div class="contentBox contentBox4" v-if="tap == 6">
			<div class="Content Content1">
				<div class="title">行业痛点</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">信息管理不规范</div>
						<div class="text">采购、验收行为不规范，记录不完整，缺乏管理手段，医疗器械质量管理问题追踪困难，医疗器械召回效果差。</div>
					</div>
					<div class="cont">
						<div class="cont_title">数量信息量大</div>
						<div class="text">数据管理繁琐，记录工作量大，易出差错，因产品“身份”识别、销售方式的多样性，部分关键信息缺失。</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">Name.OS的价值</div>
				<div class="cont_data">
					<div class="text">
						给医疗器械产品配上身份证，一械一码让医疗器械追溯更简单，利于追踪管理、打击售假、遏制假冒伪劣产品的违法行为，规范医院医疗追量管理，物资流通管理；规范医疗行为，提高计费准确性和透明度，减少医患纠纷。
					</div>
					<img src="../../static/image/42f5700047fa28db3f9992067ff47cb.png" />
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">Name.OS溯源优势</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/6a024ce7efec0f96eb0bd7b6e6be64d.png" />
						<div class="cont_title">器械检测认证</div>
						<div class="cont_text">
							按照医药区块链追溯信息管理平台提供的统一技术标准与接口，在各个环节建设信息采集与上传子系统，按照统一的数据传输格式和接口规范，采集各个节点的医药追溯信息，并统一上传至区块链追溯信息管理平台。
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/01cd6184f799334b9d536012bcdb4fd.png" />
						<div class="cont_title">采集与应用</div>
						<div class="cont_text">
							对器材材追溯的物联网技术研究与应用，提升了对追溯信息的采集、智能化处理和综合管理能力。主要运用了视频监控技术、二维码技术，通过智能物联网体系建设实现数据采集、视频监控，并实时上传了相关环境数据和视频数据。
						</div>
					</div>
				</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/56531376ffdb10d8f6705bae7323385.png" />
						<div class="cont_title">信息数据管理</div>
						<div class="cont_text">
							影像数据管理平台。无需扩建医院内部的数据中心，数据互通共享、便捷使用，为长期的健康信息保存提供安全、灵活、可扩展和可持续的支撑。提高患者就医时间灵活性与便捷性，减轻医生压力。
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/5f5f35121eff0f47879048be497f87f.png" />
						<div class="cont_title">切片扫码系统</div>
						<div class="cont_text">
							全自动数字病理切片系统。利用一体式全自动数字切片扫描系统，支持快速、稳定、高清、大批量的自动扫描切片，可云存储、云计算，显示医学病理零等待。
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：医疗行业
	            -->
		<Join></Join>
	</div>
</template>

<script>
	import Join from '../components/join.vue';
	export default {
		components: {
			Join
		},
		data() {
			return {
				tap: 6
			};
		}
	};
</script>

<style scoped>
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap4 a {
		color: #2590fe;
	}
	
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap4:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 2px;
		background-color: #2590fe;
	}
	
	.JoinUs {
		background-color: #f9f9f9;
	}
	
	.banner_Img {
		width: 100%;
		height: auto;
	}
	
	.banner_Img img {
		width: 100%;
	}
	
	#solution>.tap {
		width: 100%;
		height: 60px;
		background-color: #e6f3ff;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		min-width: 1200px;
	}
	
	#solution>.tap li {
		height: 100%;
		width: calc(1200px / 7);
		display: inline-flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 20px;
		color: #333333;
	}
	
	#solution>.tap li.active {
		background-color: #ffffff;
		color: #2590fe;
	}
	
	#solution>.tap li:hover {
		background-color: #ffffff;
		color: #2590fe;
	}
	
	.contentBox {
		width: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.contentBox .title {
		color: #2590fe;
		font-size: 20px;
		position: relative;
		width: 100%;
		height: auto;
		text-align: center;
		padding: 15px;
	}
	
	.contentBox .title:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: calc(50% - 20px);
		width: 40px;
		height: 2px;
		background-color: #2590fe;
	}
	
	.contentBox .Content {
		width: 100%;
		height: auto;
		min-width: 1200px;
		padding: 80px 0px;
	}
	
	.contentBox .Content1 {}
	
	.contentBox .Content1 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox .Content1 .cont_data .cont {
		width: 49%;
		height: auto;
		padding: 25px;
		box-shadow: 0px 0px 8px 0px #e4effd;
	}
	
	.contentBox .Content1 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		color: #333333;
		font-weight: bold;
		font-size: 18px;
		position: relative;
		padding-left: 20px;
		margin-bottom: 15px;
	}
	
	.contentBox .Content1 .cont_data .cont .cont_title:after {
		content: '';
		position: absolute;
		left: 0px;
		top: calc(50% - 4px);
		width: 4px;
		height: 4px;
		border-radius: 50%;
		overflow: hidden;
		background-color: #2590fe;
	}
	
	.contentBox .Content1 .cont_data .cont .text {
		width: 100%;
		height: 68px;
		color: #333333;
		font-size: small;
		line-height: 22px;
	}
	
	.contentBox1 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox1 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
		background: url(../../static/image/556479ee73424e52077bd0ca51973f6.png) no-repeat bottom 60px left;
		background-size: 150px;
	}
	
	.contentBox1 .Content2 .cont_data img {
		width: 600px;
	}
	
	.contentBox1 .Content2 .cont_data .cont {
		width: 450px;
		color: #333333;
		line-height: 40px;
	}
	
	.contentBox1 .Content3 {}
	
	.contentBox1 .Content3 .tips {
		width: 100%;
		height: auto;
		color: #333333;
		text-align: center;
		padding-top: 30px;
	}
	
	.contentBox1 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox1 .Content3 .cont_data .cont {
		width: 46%;
		height: auto;
		text-align: center;
	}
	
	.contentBox1 .Content3 .cont_data .cont img {
		height: 70px;
	}
	
	.contentBox1 .Content3 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		text-align: center;
		color: #000000;
		font-size: 14px;
		font-weight: bold;
		padding-top: 20px;
		padding-bottom: 10px;
	}
	
	.contentBox1 .Content3 .cont_data .cont .text {
		width: 100%;
		height: auto;
		color: #555555;
		text-align: left;
		line-height: 30px;
		font-size: small;
	}
	
	.contentBox2 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox2 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox2 .Content2 .cont_data .cont {
		width: 31%;
		height: 370px;
		text-align: center;
		background-color: #ffffff;
		padding: 80px 50px;
	}
	
	.contentBox2 .Content2 .cont_data .cont img {
		height: 100px;
		margin-bottom: 20px;
	}
	
	.contentBox2 .Content2 .cont_data .cont .text {
		width: 100%;
		height: auto;
		text-align: center;
		color: #333333;
		font-size: small;
		line-height: 30px;
	}
	
	.contentBox2 .Content3 {}
	
	.contentBox2 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox2 .Content3 .cont_data .cont {
		background-color: #ffffff;
		width: 30%;
		padding: 50px 30px;
		color: #333333;
		line-height: 30px;
		font-size: 14px;
	}
	
	.contentBox2 .Content3 .cont_data .cont img {
		width: 100px;
		margin-bottom: 30px;
	}
	
	.contentBox3 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox3 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
		background: url(../../static/image/556479ee73424e52077bd0ca51973f6.png) no-repeat bottom 80px left;
		background-size: 150px;
	}
	
	.contentBox3 .Content2 .cont_data .text {
		color: #333333;
		line-height: 40px;
		width: 500px;
	}
	
	.contentBox3 .Content2 .cont_data img {
		width: 450px;
	}
	
	.contentBox3 .Content3 {}
	
	.contentBox3 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 60px;
	}
	
	.contentBox3 .Content3 .cont_data .cont {
		width: 31%;
		height: auto;
		background-color: #f9f9f9;
		padding: 70px 50px;
		text-align: center;
	}
	
	.contentBox3 .Content3 .cont_data .cont img {
		width: 80px;
		margin-bottom: 20px;
	}
	
	.contentBox3 .Content3 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		font-weight: bold;
		color: #333333;
		margin-bottom: 30px;
	}
	
	.contentBox3 .Content3 .cont_data .cont .cont_text {
		width: 100%;
		height: auto;
		color: #333333;
		font-size: small;
		line-height: 30px;
	}
	
	.contentBox3 .Content4 {}
	
	.contentBox3 .Content4 .tips {
		width: 100%;
		height: auto;
		text-align: center;
		color: #333333;
		padding-top: 40px;
	}
	
	.contentBox3 .Content4 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 70px;
	}
	
	.contentBox3 .Content4 .cont_data .cont {
		width: 20%;
		height: auto;
		text-align: center;
	}
	
	.contentBox3 .Content4 .cont_data .cont img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	
	.contentBox3 .Content4 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		color: #333333;
		text-align: center;
		font-weight: bold;
		padding-top: 15px;
		padding-bottom: 20px;
	}
	
	.contentBox3 .Content4 .cont_data .cont .cont_text {
		width: 100%;
		height: auto;
		color: #555555;
		font-size: small;
		line-height: 30px;
	}
	
	.contentBox4 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox4 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
		background: url(../../static/image/556479ee73424e52077bd0ca51973f6.png) no-repeat bottom 80px left;
		background-size: 150px;
	}
	
	.contentBox4 .Content2 .cont_data .text {
		color: #333333;
		line-height: 40px;
		width: 500px;
	}
	
	.contentBox4 .Content2 .cont_data img {
		width: 300px;
		margin-right: 100px;
	}
	
	.contentBox4 .Content3 {}
	
	.contentBox4 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox4 .Content3 .cont_data .cont {
		width: 45%;
		height: auto;
		text-align: center;
	}
	
	.contentBox4 .Content3 .cont_data .cont img {
		height: 60px;
	}
	
	.contentBox4 .Content3 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		text-align: center;
		color: #000000;
		font-weight: bold;
		padding-top: 20px;
		padding-bottom: 15px;
	}
	
	.contentBox4 .Content3 .cont_data .cont .cont_text {
		width: 100%;
		height: auto;
		text-align: left;
		line-height: 30px;
		color: #555555;
		font-size: small;
	}
</style>